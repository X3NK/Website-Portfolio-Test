import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number
          title: string
          category: string
          image: string
          description: string
          overview: string | null
          technologies: string[] | null
          features: string[] | null
          year: string | null
          additional_images: string[] | null
          live_url: string | null
          case_study_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          category: string
          image: string
          description: string
          overview?: string | null
          technologies?: string[] | null
          features?: string[] | null
          year?: string | null
          additional_images?: string[] | null
          live_url?: string | null
          case_study_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          category?: string
          image?: string
          description?: string
          overview?: string | null
          technologies?: string[] | null
          features?: string[] | null
          year?: string | null
          additional_images?: string[] | null
          live_url?: string | null
          case_study_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}