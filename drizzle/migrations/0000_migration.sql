CREATE TABLE public.project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  need text NOT NULL CHECK (char_length(need) BETWEEN 1 AND 100),
  industry text NOT NULL CHECK (char_length(industry) BETWEEN 1 AND 100),
  site_type text NOT NULL CHECK (char_length(site_type) BETWEEN 1 AND 100),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  company text CHECK (company IS NULL OR char_length(company) <= 150),
  email text NOT NULL CHECK (char_length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
  privacy_accepted boolean NOT NULL CHECK (privacy_accepted = true)
);
GRANT INSERT ON public.project_inquiries TO anon, authenticated;
GRANT ALL ON public.project_inquiries TO service_role;
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an inquiry" ON public.project_inquiries FOR INSERT TO anon, authenticated WITH CHECK (privacy_accepted = true);