import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Package,
  Truck,
  ShieldCheck,
  CreditCard,
  CheckCircle,
  MapPin,
  Phone,
  User,
} from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { getImage } from '@/lib/imageMap';

const DELIVERY_ZONES = [
  { id: 'inside', label: 'Inside Dhaka', price: 70, note: '1–2 days' },
  { id: 'outside', label: 'Outside Dhaka', price: 130, note: '3–5 days' },
] as const;

type DeliveryZone = (typeof DELIVERY_ZONES)[number]['id'];

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCartStore();
  const [submitted, setSubmitted] = useState(false);
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone>('inside');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price);

  const subtotal = totalPrice();
  const deliveryCharge = DELIVERY_ZONES.find((z) => z.id === deliveryZone)!.price;
  const total = subtotal + deliveryCharge;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[\d\s\-+()]{7,15}$/.test(form.phone.trim()))
      errs.phone = 'Enter a valid phone number';
    if (!form.address.trim()) errs.address = 'Delivery address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    clearCart();
  };

  const updateField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  /* ── Order Confirmed State ─────────────────────────────── */
  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          <h1 className="luxury-heading text-3xl lg:text-4xl font-light mb-3">
            Order Confirmed
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
            Thank you, <span className="font-medium text-foreground">{form.name}</span>!
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Your order has been placed successfully. We&apos;ll contact you at{' '}
            <span className="font-medium text-foreground">{form.phone}</span> to
            confirm delivery details.
          </p>
          <Link
            to="/"
            className="inline-block px-10 py-3.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </section>
    );
  }

  /* ── Empty Cart State ──────────────────────────────────── */
  if (items.length === 0) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Package size={48} className="mx-auto text-muted-foreground/30 mb-4" />
          <h2 className="luxury-heading text-2xl font-light mb-2">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Add some items before checking out.
          </p>
          <Link
            to="/"
            className="inline-block px-10 py-3.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
          >
            Browse Collection
          </Link>
        </motion.div>
      </section>
    );
  }

  /* ── Checkout Form ─────────────────────────────────────── */
  return (
    <section className="pt-24 pb-16 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            Continue Shopping
          </Link>
          <h1 className="luxury-heading text-3xl lg:text-5xl font-light">
            Checkout
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ── Left: Form ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Delivery Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <h2 className="luxury-heading text-xl tracking-[0.08em]">
                    Delivery Information
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="checkout-name"
                      className="block text-xs uppercase tracking-[0.15em] font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        id="checkout-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="e.g. Ahmed Khan"
                        className={`w-full pl-11 pr-4 py-3.5 bg-background border text-sm placeholder:text-muted-foreground/50 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-destructive focus:border-destructive'
                            : 'border-border focus:border-primary'
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-destructive text-xs mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="checkout-phone"
                      className="block text-xs uppercase tracking-[0.15em] font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        id="checkout-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="e.g. 0300 1234567"
                        className={`w-full pl-11 pr-4 py-3.5 bg-background border text-sm placeholder:text-muted-foreground/50 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-destructive focus:border-destructive'
                            : 'border-border focus:border-primary'
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-destructive text-xs mt-1"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Delivery Zone */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-medium mb-3">
                      Delivery Zone
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {DELIVERY_ZONES.map((zone) => (
                        <button
                          key={zone.id}
                          type="button"
                          onClick={() => setDeliveryZone(zone.id)}
                          className={`relative flex flex-col items-start p-4 border transition-all duration-200 text-left ${
                            deliveryZone === zone.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-foreground/30'
                          }`}
                        >
                          {/* Active indicator */}
                          {deliveryZone === zone.id && (
                            <motion.span
                              layoutId="zone-indicator"
                              className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-primary"
                            />
                          )}
                          <Truck
                            size={18}
                            className={`mb-2 ${
                              deliveryZone === zone.id
                                ? 'text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                          <span className="text-sm font-medium">{zone.label}</span>
                          <span className="text-xs text-muted-foreground mt-0.5">
                            {zone.note}
                          </span>
                          <span
                            className={`text-base font-serif mt-2 ${
                              deliveryZone === zone.id ? 'text-primary' : ''
                            }`}
                          >
                            ৳{zone.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="checkout-address"
                      className="block text-xs uppercase tracking-[0.15em] font-medium mb-2"
                    >
                      Delivery Address
                    </label>
                    <textarea
                      id="checkout-address"
                      value={form.address}
                      onChange={(e) => updateField('address', e.target.value)}
                      placeholder="House / flat number, street, area"
                      rows={3}
                      className={`w-full px-4 py-3.5 bg-background border text-sm placeholder:text-muted-foreground/50 focus:outline-none transition-colors resize-none ${
                        errors.address
                          ? 'border-destructive focus:border-destructive'
                          : 'border-border focus:border-primary'
                      }`}
                    />
                    <AnimatePresence>
                      {errors.address && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-destructive text-xs mt-1"
                        >
                          {errors.address}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Order Notes */}
                  <div>
                    <label
                      htmlFor="checkout-notes"
                      className="block text-xs uppercase tracking-[0.15em] font-medium mb-2"
                    >
                      Order Notes{' '}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="checkout-notes"
                      value={form.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      placeholder="Special instructions, preferred delivery time, etc."
                      rows={2}
                      className="w-full px-4 py-3.5 bg-background border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Note */}
              <div className="flex items-center gap-3 p-4 border border-border bg-secondary/30">
                <CreditCard size={18} className="text-muted-foreground flex-shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cash on Delivery — Pay when your order arrives at your doorstep.
                </p>
              </div>

              {/* Submit — visible on mobile */}
              <button
                type="submit"
                className="lg:hidden w-full py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
              >
                Place Order — ৳{total}
              </button>
            </form>
          </motion.div>

          {/* ── Right: Order Summary ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <div className="border border-border bg-secondary/20 p-6 lg:p-8">
                <h2 className="luxury-heading text-xl tracking-[0.08em] mb-6">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-5 mb-6">
                  {items.map((item, i) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex gap-4"
                    >
                      <div className="w-16 h-20 flex-shrink-0 overflow-hidden border border-border">
                        <img
                          src={getImage(item.product.image)}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Size: {item.size} · Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-medium mt-1">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing breakdown */}
                <div className="border-t border-border pt-5 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <Truck size={14} />
                      Delivery
                      <span className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">
                        {DELIVERY_ZONES.find((z) => z.id === deliveryZone)!.label}
                      </span>
                    </span>
                    <motion.span
                      key={deliveryCharge}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ৳{deliveryCharge}
                    </motion.span>
                  </div>
                  <div className="border-t border-border pt-3 flex items-center justify-between">
                    <span className="text-sm font-medium">Total</span>
                    <motion.span
                      key={total}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="font-serif text-xl"
                    >
                      ৳{total}
                    </motion.span>
                  </div>
                </div>

                {/* Submit — desktop */}
                <button
                  type="submit"
                  form=""
                  onClick={(e) => {
                    e.preventDefault();
                    const formEl = document.querySelector('form');
                    if (formEl) formEl.requestSubmit();
                  }}
                  className="hidden lg:block w-full mt-6 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
                >
                  Place Order — ৳{total}
                </button>

                {/* Trust badges */}
                <div className="mt-6 flex items-center justify-center gap-6 text-muted-foreground/50">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    <ShieldCheck size={14} />
                    Secure
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    <Truck size={14} />
                    3-5 Days
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                    <Package size={14} />
                    COD
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
