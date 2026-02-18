// import React, { useState } from "react";
// import {
//   X,
//   CreditCard,
//   User,
//   Phone,
//   MapPin,
//   Loader2,
//   Wallet,
// } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { cn } from "@/lib/utils";
// import { toast } from "@/hooks/use-toast";
// import { useNavigate } from "react-router-dom";

// // Interface for Razorpay response
// interface RazorpayResponse {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// }

// // Add Razorpay to window object for TypeScript
// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// interface CheckoutFormProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CheckoutForm: React.FC<CheckoutFormProps> = ({ isOpen, onClose }) => {
//   const navigate = useNavigate();
//   const { items, totalPrice, clearCart, setIsCartOpen } = useCart();

//   // State for Form
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   // State for Payment Method
//   const [paymentMethod, setPaymentMethod] = useState<"ONLINE" | "COD">(
//     "ONLINE",
//   );

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const loadScript = (src: string) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
//       newErrors.phone = "Please enter a valid 10-digit phone number";
//     }
//     if (!formData.address.trim()) newErrors.address = "Address is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleOrderSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;
//     setIsSubmitting(true);

//     try {
//       // 1. Load SDK only if paying online
//       if (paymentMethod === "ONLINE") {
//         const res = await loadScript(
//           "https://checkout.razorpay.com/v1/checkout.js",
//         );
//         if (!res) {
//           toast({
//             title: "Error",
//             description: "Razorpay SDK failed to load.",
//             variant: "destructive",
//           });
//           setIsSubmitting(false);
//           return;
//         }
//       }

//       // 2. Create Order on Backend (Pass payment_mode)
//       const orderResponse = await fetch(
//         // "http://127.0.0.1:8000/api/create-order/",
//         `${import.meta.env.VITE_API_BASE_URL}/api/create-order/`,

//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             full_name: formData.name,
//             phone_number: formData.phone,
//             address: formData.address,
//             payment_mode: paymentMethod, // 'ONLINE' or 'COD'
//             items: items,
//           }),
//         },
//       );

//       const orderData = await orderResponse.json();

//       if (!orderResponse.ok) {
//         throw new Error(orderData.detail || "Failed to create order");
//       }

//       // 3. Handle COD Flow
//       if (paymentMethod === "COD") {
//         // Direct Success for COD
//         clearCart();
//         setIsCartOpen(false);
//         onClose();
//         setFormData({ name: "", phone: "", address: "" });
//         navigate(`/order/${orderData.order_id}`);
//         toast({
//           title: "Order Placed!",
//           description: `Your COD order #${orderData.order_id} has been placed.`,
//         });
//         setIsSubmitting(false);
//         return;
//       }

//       // 4. Handle Online Payment Flow (Razorpay)
//       const options = {
//         key: orderData.key_id,
//         amount: orderData.amount * 100,
//         currency: orderData.currency,
//         name: "Kshiti Organics",
//         description: "Fresh Farm Products",
//         order_id: orderData.razorpay_order_id,
//         handler: async function (response: RazorpayResponse) {
//           try {
//             const verifyRes = await fetch(
//               `${import.meta.env.VITE_API_BASE_URL}/api/verify-payment/`,
//               {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                   razorpay_payment_id: response.razorpay_payment_id,
//                   razorpay_order_id: response.razorpay_order_id,
//                   razorpay_signature: response.razorpay_signature,
//                 }),
//               },
//             );

//             if (verifyRes.ok) {
//               clearCart();
//               setIsCartOpen(false);
//               onClose();
//               setFormData({ name: "", phone: "", address: "" });
//               navigate(`/order/${orderData.order_id}`);
//               toast({
//                 title: "Payment Successful!",
//                 description: `Order placed successfully.`,
//               });
//             } else {
//               toast({ title: "Verification Failed", variant: "destructive" });
//             }
//           } catch (error) {
//             console.error(error);
//           }
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//         },
//         theme: { color: "#16a34a" },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//       paymentObject.on("payment.failed", function (response: any) {
//         toast({
//           title: "Payment Failed",
//           description: response.error.description,
//           variant: "destructive",
//         });
//       });
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Order Failed",
//         description: "Could not place order. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={cn(
//           "fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[60] transition-opacity duration-300",
//           isOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none",
//         )}
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div
//         className={cn(
//           "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[60] transition-all duration-300",
//           isOpen
//             ? "opacity-100 scale-100 pointer-events-auto"
//             : "opacity-0 scale-95 pointer-events-none",
//         )}
//       >
//         <div className="bg-card rounded-2xl shadow-2xl m-4 overflow-hidden max-h-[90vh] overflow-y-auto">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-primary to-leaf p-6 text-primary-foreground sticky top-0 z-10">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="font-display text-2xl font-bold">Checkout</h2>
//                 <p className="text-primary-foreground/80 text-sm">
//                   Complete your order
//                 </p>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleOrderSubmit} className="p-6 space-y-4">
//             {/* Personal Details */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1.5">
//                   <User className="inline h-4 w-4 mr-1 text-primary" /> Full
//                   Name
//                 </label>
//                 <Input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   className={cn(
//                     "py-5 rounded-xl",
//                     errors.name && "border-destructive",
//                   )}
//                 />
//                 {errors.name && (
//                   <p className="text-destructive text-xs mt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1.5">
//                   <Phone className="inline h-4 w-4 mr-1 text-primary" /> Phone
//                   Number
//                 </label>
//                 <Input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your 10-digit phone number"
//                   type="tel"
//                   className={cn(
//                     "py-5 rounded-xl",
//                     errors.phone && "border-destructive",
//                   )}
//                 />
//                 {errors.phone && (
//                   <p className="text-destructive text-xs mt-1">
//                     {errors.phone}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1.5">
//                   <MapPin className="inline h-4 w-4 mr-1 text-primary" />{" "}
//                   Delivery Address
//                 </label>
//                 <Textarea
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   placeholder="Enter your complete delivery address"
//                   rows={3}
//                   className={cn(
//                     "rounded-xl resize-none",
//                     errors.address && "border-destructive",
//                   )}
//                 />
//                 {errors.address && (
//                   <p className="text-destructive text-xs mt-1">
//                     {errors.address}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Payment Method Selection */}
//             <div className="pt-2">
//               <label className="block text-sm font-medium mb-2">
//                 Payment Method
//               </label>
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   onClick={() => setPaymentMethod("ONLINE")}
//                   className={cn(
//                     "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all",
//                     paymentMethod === "ONLINE"
//                       ? "border-primary bg-primary/5 text-primary"
//                       : "border-border hover:border-primary/50 text-muted-foreground",
//                   )}
//                 >
//                   <CreditCard className="h-6 w-6 mb-1" />
//                   <span className="text-sm font-semibold">Pay Online</span>
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setPaymentMethod("COD")}
//                   className={cn(
//                     "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all",
//                     paymentMethod === "COD"
//                       ? "border-primary bg-primary/5 text-primary"
//                       : "border-border hover:border-primary/50 text-muted-foreground",
//                   )}
//                 >
//                   <Wallet className="h-6 w-6 mb-1" />
//                   <span className="text-sm font-semibold">
//                     Cash on Delivery
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Total & Submit */}
//             <div className="pt-2">
//               <div className="flex justify-between items-center mb-4 p-3 bg-muted/50 rounded-lg">
//                 <span className="text-muted-foreground">Total Amount</span>
//                 <span className="font-bold text-xl text-primary">
//                   ₹{totalPrice}
//                 </span>
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full btn-primary py-6 text-lg rounded-xl flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     {paymentMethod === "ONLINE" ? (
//                       <CreditCard className="h-5 w-5" />
//                     ) : (
//                       <Wallet className="h-5 w-5" />
//                     )}
//                     {paymentMethod === "ONLINE"
//                       ? `Pay ₹${totalPrice}`
//                       : "Place Order (COD)"}
//                   </>
//                 )}
//               </Button>

//               <p className="text-xs text-center text-muted-foreground mt-2">
//                 {paymentMethod === "ONLINE"
//                   ? "Secured by Razorpay"
//                   : "Pay cash upon receiving your order"}
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckoutForm;
import React, { useState } from "react";
import {
  X,
  CreditCard,
  User,
  Phone,
  Mail, // Imported Mail icon
  MapPin,
  Loader2,
  Wallet,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// Interface for Razorpay response
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Add Razorpay to window object for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();

  // State for Form
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Added email state
    phone: "",
    address: "",
  });

  // State for Payment Method
  const [paymentMethod, setPaymentMethod] = useState<"ONLINE" | "COD">(
    "ONLINE",
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // 1. Load SDK only if paying online
      if (paymentMethod === "ONLINE") {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js",
        );
        if (!res) {
          toast({
            title: "Error",
            description: "Razorpay SDK failed to load.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }
      }

      // 2. Create Order on Backend (Pass payment_mode)
      const orderResponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/create-order/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email, // Passing email to backend
            phone_number: formData.phone,
            address: formData.address,
            payment_mode: paymentMethod,
            items: items,
          }),
        },
      );

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderData.detail || "Failed to create order");
      }

      // 3. Handle COD Flow
      if (paymentMethod === "COD") {
        clearCart();
        setIsCartOpen(false);
        onClose();
        setFormData({ name: "", email: "", phone: "", address: "" });
        navigate(`/order/${orderData.order_id}`);
        toast({
          title: "Order Placed!",
          description: `Your COD order has been placed.`,
        });
        setIsSubmitting(false);
        return;
      }

      // 4. Handle Online Payment Flow (Razorpay)
      const options = {
        key: orderData.key_id,
        amount: orderData.amount * 100,
        currency: orderData.currency,
        name: "Kshiti Organics",
        description: "Fresh Farm Products",
        order_id: orderData.razorpay_order_id,
        handler: async function (response: RazorpayResponse) {
          try {
            const verifyRes = await fetch(
              `${import.meta.env.VITE_API_BASE_URL}/api/verify-payment/`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              },
            );

            if (verifyRes.ok) {
              clearCart();
              setIsCartOpen(false);
              onClose();
              setFormData({ name: "", email: "", phone: "", address: "" });
              navigate(`/order/${orderData.order_id}`);
              toast({
                title: "Payment Successful!",
                description: `Order placed successfully.`,
              });
            } else {
              toast({ title: "Verification Failed", variant: "destructive" });
            }
          } catch (error) {
            console.error(error);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email, // Added email to prefill
          contact: formData.phone,
        },
        theme: { color: "#16a34a" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      paymentObject.on("payment.failed", function (response: any) {
        toast({
          title: "Payment Failed",
          description: response.error.description,
          variant: "destructive",
        });
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Order Failed",
        description: "Could not place order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (!isOpen) return null; // Simplified rendering check

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[60] transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[60] transition-all duration-300",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="bg-card rounded-2xl shadow-2xl m-4 overflow-hidden max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-leaf p-6 text-primary-foreground sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold">Checkout</h2>
                <p className="text-primary-foreground/80 text-sm">
                  Complete your order
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleOrderSubmit} className="p-6 space-y-4">
            {/* Personal Details */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  <User className="inline h-4 w-4 mr-1 text-primary" /> Full
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={cn(
                    "py-5 rounded-xl",
                    errors.name && "border-destructive",
                  )}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field Added Here */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  <Mail className="inline h-4 w-4 mr-1 text-primary" /> Email
                  Address
                </label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  type="email"
                  className={cn(
                    "py-5 rounded-xl",
                    errors.email && "border-destructive",
                  )}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  <Phone className="inline h-4 w-4 mr-1 text-primary" /> Phone
                  Number
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit phone number"
                  type="tel"
                  className={cn(
                    "py-5 rounded-xl",
                    errors.phone && "border-destructive",
                  )}
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  <MapPin className="inline h-4 w-4 mr-1 text-primary" />{" "}
                  Delivery Address
                </label>
                <Textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete delivery address"
                  rows={3}
                  className={cn(
                    "rounded-xl resize-none",
                    errors.address && "border-destructive",
                  )}
                />
                {errors.address && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.address}
                  </p>
                )}
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="pt-2">
              <label className="block text-sm font-medium mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("ONLINE")}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all",
                    paymentMethod === "ONLINE"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50 text-muted-foreground",
                  )}
                >
                  <CreditCard className="h-6 w-6 mb-1" />
                  <span className="text-sm font-semibold">Pay Online</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("COD")}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all",
                    paymentMethod === "COD"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50 text-muted-foreground",
                  )}
                >
                  <Wallet className="h-6 w-6 mb-1" />
                  <span className="text-sm font-semibold">
                    Cash on Delivery
                  </span>
                </button>
              </div>
            </div>

            {/* Total & Submit */}
            <div className="pt-2">
              <div className="flex justify-between items-center mb-4 p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground">Total Amount</span>
                <span className="font-bold text-xl text-primary">
                  ₹{totalPrice}
                </span>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-6 text-lg rounded-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    {paymentMethod === "ONLINE" ? (
                      <CreditCard className="h-5 w-5" />
                    ) : (
                      <Wallet className="h-5 w-5" />
                    )}
                    {paymentMethod === "ONLINE"
                      ? `Pay ₹${totalPrice}`
                      : "Place Order (COD)"}
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-2">
                {paymentMethod === "ONLINE"
                  ? "Secured by Razorpay"
                  : "Pay cash upon receiving your order"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
