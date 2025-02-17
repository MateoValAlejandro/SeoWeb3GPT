/*
  # Initial Schema Setup

  1. New Tables
    - `seo_analyses`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `content` (text)
      - `analysis_result` (jsonb)
      - `created_at` (timestamp)
    - `nft_content`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `content` (text)
      - `ipfs_uri` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create seo_analyses table
CREATE TABLE IF NOT EXISTS seo_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  content text NOT NULL,
  analysis_result jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create nft_content table
CREATE TABLE IF NOT EXISTS nft_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  content text NOT NULL,
  ipfs_uri text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE seo_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE nft_content ENABLE ROW LEVEL SECURITY;

-- Create policies for seo_analyses
CREATE POLICY "Users can create their own analyses"
  ON seo_analyses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own analyses"
  ON seo_analyses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for nft_content
CREATE POLICY "Users can create their own NFT content"
  ON nft_content
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own NFT content"
  ON nft_content
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);