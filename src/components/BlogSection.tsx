import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import educationImg from "@/assets/education-program.jpg";
import womenEmpowermentImg from "@/assets/women-empowerment.jpg";
import childProtectionImg from "@/assets/child-protection.jpg";

const BlogSection = () => {
  const recentPosts = [
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
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Read about our impact, success stories, and the journey toward empowerment and equality.
            </p>
          </div>
          <Link to="/blog" className="hidden md:block">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
