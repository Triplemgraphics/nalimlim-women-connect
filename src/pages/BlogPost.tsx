import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import educationImg from "@/assets/education-program.jpg";
import womenEmpowermentImg from "@/assets/women-empowerment.jpg";
import childProtectionImg from "@/assets/child-protection.jpg";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog posts data (in a real app, this would come from a CMS or database)
  const posts: Record<string, any> = {
    "empowering-girls-through-education": {
      title: "Empowering Girls Through Education: Breaking Barriers in Kapoeta",
      author: "Lucy Chepar Lokeno",
      date: "Jan 15, 2025",
      image: educationImg,
      category: "Education",
      content: `
        <p>In the heart of Eastern Equatoria State, a quiet revolution is taking place. Young girls who were once denied access to education are now walking proudly through school gates, books in hand, dreams in their hearts.</p>
        
        <h2>The Challenge</h2>
        <p>For generations, girls in Greater Kapoeta have faced enormous barriers to education. Early marriage, cultural practices that prioritize dowry over schooling, and limited resources have kept countless bright young minds from reaching their potential.</p>
        
        <h2>Our Approach</h2>
        <p>NAWAI's education program takes a comprehensive, community-centered approach:</p>
        <ul>
          <li>Direct support to girls through school supplies and retention programs</li>
          <li>Community sensitization to change harmful attitudes about girls' education</li>
          <li>Partnerships with local schools to create safe, inclusive learning environments</li>
          <li>Life skills training to build confidence and leadership</li>
        </ul>
        
        <h2>Real Impact</h2>
        <p>The results speak for themselves. School enrollment rates for girls are rising. More importantly, families are beginning to see education as an investment in their daughters' futures, not an obstacle to tradition.</p>
        
        <p>But our work is far from over. Every girl who completes her education becomes a beacon of hope for her community, proving that change is possible when we stand together.</p>
      `,
    },
    "women-leading-change": {
      title: "Women Leading Change: Building Community Resilience",
      author: "NAWAI Team",
      date: "Jan 10, 2025",
      image: womenEmpowermentImg,
      category: "Empowerment",
      content: `
        <p>Leadership knows no gender. In communities across South Sudan, women are stepping forward to guide, inspire, and transform their societies.</p>
        
        <h2>Breaking Traditional Barriers</h2>
        <p>For too long, women's voices have been silenced in decision-making processes. NAWAI's gender equality programs are changing that narrative by:</p>
        <ul>
          <li>Providing legal awareness and rights education</li>
          <li>Creating platforms for women's participation in governance</li>
          <li>Building networks of women leaders who support each other</li>
          <li>Addressing gender-based violence through community advocacy</li>
        </ul>
        
        <h2>Success Stories</h2>
        <p>We've witnessed remarkable transformations. Women who once felt powerless are now mediating conflicts, leading community initiatives, and demanding their rightful place at decision-making tables.</p>
        
        <p>These changes don't happen overnight, but each small victory builds momentum for lasting transformation.</p>
      `,
    },
    "protecting-childhood": {
      title: "Protecting Childhood: Creating Safe Spaces for Every Child",
      author: "NAWAI Team",
      date: "Jan 5, 2025",
      image: childProtectionImg,
      category: "Child Protection",
      content: `
        <p>Every child deserves to grow up in safety, free from abuse, exploitation, and harmful practices. NAWAI's child protection work is creating that reality.</p>
        
        <h2>Understanding the Challenge</h2>
        <p>Children in our communities face multiple threats:</p>
        <ul>
          <li>Early and forced marriage</li>
          <li>Child labor and exploitation</li>
          <li>Abuse and neglect</li>
          <li>Lack of access to basic services</li>
        </ul>
        
        <h2>Our Protection Framework</h2>
        <p>We work on multiple levels to safeguard children:</p>
        <ul>
          <li>Establishing safe spaces where children can learn and play</li>
          <li>Training community protection networks</li>
          <li>Educating families about children's rights</li>
          <li>Partnering with traditional leaders to end harmful practices</li>
        </ul>
        
        <h2>The Path Forward</h2>
        <p>Protecting children requires collective action. When communities understand that children's wellbeing is everyone's responsibility, real change becomes possible.</p>
      `,
    },
  };

  const post = id ? posts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <article className="py-12">
          <div className="container max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 p-0 h-auto text-primary hover:bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-6">
              <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>

            {post.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t">
              <Link to="/blog">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
