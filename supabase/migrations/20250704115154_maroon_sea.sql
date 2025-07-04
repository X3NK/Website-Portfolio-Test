/*
  # Create projects table

  1. New Tables
    - `projects`
      - `id` (integer, primary key, auto-increment)
      - `title` (text, not null)
      - `category` (text, not null)
      - `image` (text, not null)
      - `description` (text, not null)
      - `overview` (text, nullable)
      - `technologies` (text array, nullable)
      - `features` (text array, nullable)
      - `year` (text, nullable)
      - `additional_images` (text array, nullable)
      - `live_url` (text, nullable)
      - `case_study_url` (text, nullable)
      - `created_at` (timestamp with timezone, default now())
      - `updated_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access
    - Add policy for authenticated users to manage projects
*/

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  overview TEXT,
  technologies TEXT[],
  features TEXT[],
  year TEXT,
  additional_images TEXT[],
  live_url TEXT,
  case_study_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy for public read access
CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- Policy for authenticated users to insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy for authenticated users to update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy for authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO projects (title, category, image, description, overview, technologies, features, year, additional_images, live_url, case_study_url) VALUES
(
  'ANALOG SYNTHESIS',
  'Graphic Design',
  'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  'A series of posters exploring the intersection of analog and digital aesthetics.',
  'This project explores the intersection of analog and digital aesthetics, combining traditional design principles with modern digital techniques.',
  ARRAY['Adobe Photoshop', 'Illustrator', 'After Effects'],
  ARRAY['Innovative blend of analog and digital aesthetics', 'Custom typography and visual elements'],
  '2024',
  ARRAY['https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'],
  '',
  ''
),
(
  'DIGITAL UTOPIA',
  'Web Design',
  'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Interactive web experience combining retro computing with modern design.',
  'Interactive web experience that bridges retro computing aesthetics with contemporary design principles.',
  ARRAY['React', 'TypeScript', 'CSS3'],
  ARRAY['Responsive design', 'Interactive animations', 'Modern web standards'],
  '2024',
  ARRAY['https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'],
  '',
  ''
),
(
  'HYPERSIGIL BRAND',
  'Brand Identity',
  'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Complete brand identity for a digital art collective.',
  'Comprehensive brand identity development for a forward-thinking digital art collective.',
  ARRAY['Adobe Illustrator', 'Photoshop', 'InDesign'],
  ARRAY['Logo design', 'Brand guidelines', 'Typography system'],
  '2024',
  ARRAY[]::TEXT[],
  '',
  ''
);