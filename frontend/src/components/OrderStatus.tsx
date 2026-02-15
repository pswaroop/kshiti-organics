import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  Clock,
  Package,
  Home,
  Loader2,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Define the Order Interface matching backend response
interface OrderItem {
  product_name: string;
  quantity: number;
  selected_weight: string;
  price: number;
}

interface OrderDetails {
  id: number;
  full_name: string;
  phone_number: string;
  address: string;
  total_amount: number;
  payment_status: boolean;
  order_status: "Pending" | "Paid" | "Shipped" | "Delivered" | "Cancelled";
  razorpay_order_id: string;
  created_at: string;
  items: OrderItem[];
}

const OrderStatus: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>(); // Assumes route is /order/:orderId
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // Note: You need to ensure your backend exposes a retrieve endpoint for orders
        // Example: router.register(r'orders', OrderViewSet) in Django handles this automatically at /api/orders/{id}/
        const response = await fetch(
          `http://127.0.0.1:8000/api/orders/${orderId}/`,
        );

        if (!response.ok) {
          throw new Error("Order not found");
        }

        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError("Could not load order details. Please check the Order ID.");
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!", description: "Order ID copied to clipboard." });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30">
        <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Loading order details...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4 text-center">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
          <XCircle className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Order Not Found
        </h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Link to="/">
          <Button className="btn-primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  // Status Badge Logic
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700 border-green-200";
      case "Shipped":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Delivered":
        return "bg-primary/20 text-primary border-primary/30";
      case "Cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 bg-leaf/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-muted-foreground">
            Thank you for shopping with Kshiti Organics.
          </p>
        </div>

        {/* Order Card */}
        <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden animate-slide-up">
          {/* Top Bar: ID and Status */}
          <div className="bg-muted/50 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order ID</p>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-lg">#{order.id}</span>
                <button
                  onClick={() => copyToClipboard(`#${order.id}`)}
                  className="p-1.5 hover:bg-background rounded-md transition-colors text-muted-foreground"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <span className="text-xs text-muted-foreground mt-1 block">
                {new Date(order.created_at).toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium border flex items-center gap-2",
                  getStatusColor(order.order_status),
                )}
              >
                {order.order_status === "Pending" && (
                  <Clock className="h-3.5 w-3.5" />
                )}
                {order.order_status === "Paid" && (
                  <CheckCircle className="h-3.5 w-3.5" />
                )}
                {order.order_status}
              </div>
              {order.payment_status && (
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  Payment Verified
                </span>
              )}
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-6 grid gap-8 md:grid-cols-2">
            {/* Left: Items */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Items Ordered
              </h3>
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start text-sm border-b border-border/50 pb-3 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">
                        {item.product_name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {item.selected_weight} x {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">₹{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                <span className="font-bold text-foreground">Total Amount</span>
                <span className="font-bold text-xl text-primary">
                  ₹{order.total_amount}
                </span>
              </div>
            </div>

            {/* Right: Shipping Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Shipping Details
              </h3>
              <div className="bg-muted/30 rounded-xl p-4 space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                    Customer
                  </p>
                  <p className="font-medium">{order.full_name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="font-medium">{order.phone_number}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="font-medium leading-relaxed">{order.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-muted/50 border-t border-border flex justify-center">
            <Link to="/">
              <Button className="btn-primary min-w-[200px]">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
