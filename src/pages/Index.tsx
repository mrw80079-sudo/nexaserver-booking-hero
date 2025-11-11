import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Calendar, Users, CreditCard, Mail } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء الحقول المطلوبة.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "تم استلام طلبك!",
      description: "سنوافيك بتأكيد الحجز خلال 24 ساعة.",
    });

    setFormData({ name: "", email: "", service: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[#ff7b7b] flex items-center justify-center font-bold text-primary-foreground shadow-lg">
              NS
            </div>
            <div>
              <div className="font-extrabold text-lg">NexaServe</div>
              <div className="text-xs text-muted-foreground">خدمة حجز ومتابعة احترافية</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">الرئيسية</a>
            <a href="#services" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">خدماتنا</a>
            <a href="#testimonials" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">توصيات</a>
            <a href="#contact" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">تواصل</a>
            <Button size="sm" className="font-bold">احجز جلستك</Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="p-8 lg:p-10 bg-gradient-to-b from-card/50 to-transparent backdrop-blur-sm border-border/50 shadow-2xl">
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                خدمات احترافية للحجوزات والمتابعة
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                نقدم خدمة حجز مواعيد، إدارة عملاء، ونظام تذكير آلي — مناسب للمعلمين، المستشارين، ومقدمي الخدمات. تصميم سريع، متجاوب، وقابل للتصدير على GitHub أو الاستضافة المباشرة.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  احجز جلسة
                </Button>
                <Button size="lg" variant="outline" className="font-semibold" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  اطلع على الخدمات
                </Button>
              </div>
            </Card>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">حجز سريع</div>
                    <div className="text-sm text-muted-foreground">نظام حجز مباشر</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold">إدارة العملاء</div>
                    <div className="text-sm text-muted-foreground">قاعدة بيانات متكاملة</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">دفع إلكتروني</div>
                    <div className="text-sm text-muted-foreground">خيارات دفع متعددة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-16">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-8">خدماتنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm border-border/50">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                حجز جلسات
              </div>
              <h3 className="text-xl font-bold mb-2">حجز مواعيد سهل</h3>
              <p className="text-muted-foreground text-sm">
                أنشئ صفحة حجز للعميل مع خيار اختيار التاريخ والوقت وملحوظات الجلسة.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm border-border/50">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-3">
                إدارة عملاء
              </div>
              <h3 className="text-xl font-bold mb-2">قاعدة بيانات للمتابعين</h3>
              <p className="text-muted-foreground text-sm">
                احفظ تفاصيل العملاء، ملاحظات الجلسات، وتاريخ التذكير.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm border-border/50">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                دفع إلكتروني (اختياري)
              </div>
              <h3 className="text-xl font-bold mb-2">خيارات دفع</h3>
              <p className="text-muted-foreground text-sm">
                تكامل مع بوابات دفع أو صفحة تأكيد للحجوزات المدفوعة.
              </p>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mx-auto px-4 py-16">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-8">توصيات العملاء</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-b from-card/50 to-transparent backdrop-blur-sm border-border/50">
              <div className="font-bold mb-2">علي</div>
              <p className="text-muted-foreground text-sm">
                "سهولة في الحجز وتذكير تلقائي وفر لنا وقت كبير."
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-b from-card/50 to-transparent backdrop-blur-sm border-border/50">
              <div className="font-bold mb-2">مريم</div>
              <p className="text-muted-foreground text-sm">
                "تصميم أنيق وسهل الاستخدام — أنصح به لأي معلم خصوصي."
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-b from-card/50 to-transparent backdrop-blur-sm border-border/50">
              <div className="font-bold mb-2">سعيد</div>
              <p className="text-muted-foreground text-sm">
                "قدرنا نصدر الكود ونعدله محليًا بسرعة."
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-extrabold">تواصل معنا أو احجز جلسة</h3>
            </div>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم</Label>
                  <Input
                    id="name"
                    placeholder="اسمك"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">الخدمة المطلوبة</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الخدمة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">جلسة خصوصية</SelectItem>
                      <SelectItem value="consultation">استشارة عمل</SelectItem>
                      <SelectItem value="followup">متابعة دورية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">ملاحظات</Label>
                  <Textarea
                    id="notes"
                    placeholder="اكتب ملاحظات أو تفاصيل..."
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  أرسل واطلب حجز
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          © <strong className="text-foreground">NexaServe</strong> — مشروع IS101 Phase 3 · تصميم وتطوير جاهز للتسليم
        </div>
      </footer>
    </div>
  );
};

export default Index;
