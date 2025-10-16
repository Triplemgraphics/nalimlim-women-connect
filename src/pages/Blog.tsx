import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import educationImg from "@/assets/education-program.jpg";
import womenEmpowermentImg from "@/assets/women-empowerment.jpg";
import childProtectionImg from "@/assets/child-protection.jpg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Education", "Empowerment", "Child Protection", "Health", "Community"];

  const allPosts = [
    {
      id: "empowering-girls-through-education",
      title: "Empowering Girls Through Education: Breaking Barriers in Kapoeta",
      excerpt: "Discover how NAWAI is transforming lives by ensuring girls in Eastern Equatoria State have access to quality education and opportunities to thrive.",
      author: "Lucy Chepar Lokeno",
      date: "Jan 15, 2025",
      image: educationImg,
      category: "Education",
    },
    {
      id: "women-leading-change",
      title: "Women Leading Change: Building Community Resilience",
      excerpt: "Meet the inspiring women leaders who are driving transformation in their communities through advocacy, empowerment, and collective action.",
      author: "NAWAI Team",
      date: "Jan 10, 2025",
      image: womenEmpowermentImg,
      category: "Empowerment",
    },
    {
      id: "protecting-childhood",
      title: "Protecting Childhood: Creating Safe Spaces for Every Child",
      excerpt: "Learn about our child protection initiatives and how we're working with communities to end harmful practices and ensure children's rights.",
      author: "NAWAI Team",
      date: "Jan 5, 2025",
      image: childProtectionImg,
      category: "Child Protection",
    },
    {
      id: "community-health-initiative",
      title: "Community Health: Supporting Women's Wellbeing",
      excerpt: "Our comprehensive approach to reproductive health education and psychosocial support is making a difference in women's lives across Greater Kapoeta.",
      author: "NAWAI Team",
      date: "Dec 28, 2024",
      category: "Health",
    },
    {
      id: "sustainable-livelihoods",
      title: "Building Sustainable Livelihoods: Economic Empowerment in Action",
      excerpt: "See how our livelihood programs are helping women achieve financial independence and build resilient futures for their families.",
      author: "NAWAI Team",
      date: "Dec 20, 2024",
      category: "Community",
    },
    {
      id: "gbv-prevention",
      title: "Ending Gender-Based Violence: Awareness and Action",
      excerpt: "Our community-led approach to preventing GBV is creating safer environments and empowering survivors with support and justice.",
      author: "Lucy Chepar Lokeno",
      date: "Dec 15, 2024",
      category: "Empowerment",
    },
  ];

  const filteredPosts = selectedCategory === "All" 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Our Blog
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/95 leading-relaxed">
                Stories of hope, transformation, and impact from our work empowering women and girls across South Sudan.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-primary hover:bg-primary/90" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No posts found in this category. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
