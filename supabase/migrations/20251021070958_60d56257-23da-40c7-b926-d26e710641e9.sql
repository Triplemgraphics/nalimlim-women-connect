-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  author TEXT NOT NULL DEFAULT 'NAWAI Team',
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read blog posts
CREATE POLICY "Blog posts are viewable by everyone"
  ON public.blog_posts
  FOR SELECT
  USING (true);

-- Only authenticated users can insert blog posts
CREATE POLICY "Authenticated users can create blog posts"
  ON public.blog_posts
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Only authenticated users can update blog posts
CREATE POLICY "Authenticated users can update blog posts"
  ON public.blog_posts
  FOR UPDATE
  USING (auth.uid() IS NOT NULL);

-- Only authenticated users can delete blog posts
CREATE POLICY "Authenticated users can delete blog posts"
  ON public.blog_posts
  FOR DELETE
  USING (auth.uid() IS NOT NULL);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, author) VALUES
('Empowering Girls Through Education in Kapoeta', 'empowering-girls-through-education', 'How NAWAI is breaking barriers to ensure girls in Eastern Equatoria have access to quality education and a brighter future.', 'Education is a fundamental right, yet many girls in South Sudan face significant barriers to accessing quality education. NAWAI is working tirelessly to change this narrative through our Girls'' Education and Empowerment program.\n\nOur approach is multi-faceted: we provide school materials, mentorship programs, and community sensitization to ensure girls not only enroll in school but complete their education. We''ve seen remarkable results, with enrollment rates increasing by 35% in our target communities.\n\nThrough advocacy and retention support, we''re creating an environment where girls can thrive academically and develop the life skills necessary to become future leaders in their communities.', 'Education', 'NAWAI Team'),

('Breaking the Silence: Addressing Gender-Based Violence', 'breaking-silence-gender-based-violence', 'NAWAI''s comprehensive approach to preventing and responding to gender-based violence in South Sudanese communities.', 'Gender-based violence remains a critical challenge in South Sudan. NAWAI has established safe spaces and community advocacy programs to address this issue head-on.\n\nOur legal empowerment initiatives educate women about their rights and provide pathways to justice. We''ve trained community leaders as advocates for women''s rights and established referral networks for survivors.\n\nThrough psychosocial support and trauma-informed care, we''re helping survivors heal and reclaim their dignity. Our work extends to prevention through community dialogue and changing harmful social norms that perpetuate violence.', 'Gender Equality', 'NAWAI Team'),

('Building Resilient Communities Through WASH', 'building-resilient-communities-wash', 'Clean water and proper sanitation are transforming lives in rural South Sudan communities.', 'Access to clean water and sanitation facilities is a game-changer for communities, especially for women and girls who traditionally bear the burden of water collection.\n\nNAWAI''s WASH program has constructed water points and sanitation facilities in underserved areas, reducing water-borne diseases and freeing up time for women and girls to pursue education and economic opportunities.\n\nOur approach includes hygiene education and community ownership of WASH facilities to ensure sustainability. The impact has been profound - school attendance has improved, and women report having more time for productive activities.', 'WASH', 'NAWAI Team');
