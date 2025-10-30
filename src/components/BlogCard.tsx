import { Calendar, User, ArrowRight, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
  category: string;
}

const BlogCard = ({ id, title, excerpt, author, date, image, category }: BlogCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Link to={`/blog/${id}`}>
            <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="https://nalimlimwomen.org" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              <Heart className="mr-1 h-4 w-4" />
              Donate
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
