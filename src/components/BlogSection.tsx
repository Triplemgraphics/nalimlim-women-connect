import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"];

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(3);

    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-muted/30">
        <div className="container text-center">
          <p className="text-muted-foreground">Loading posts...</p>
        </div>
      </section>
    );
  }

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
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={new Date(post.published_at || post.created_at).toLocaleDateString()}
              image={post.image_url || undefined}
              author={post.author}
            />
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
