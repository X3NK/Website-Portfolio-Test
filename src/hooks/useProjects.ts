import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { Project } from '../App'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch projects from Supabase
  const fetchProjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      // Transform data to match Project interface
      const transformedProjects: Project[] = data.map(project => ({
        id: project.id,
        title: project.title,
        category: project.category,
        image: project.image,
        description: project.description,
        overview: project.overview || undefined,
        technologies: project.technologies || undefined,
        features: project.features || undefined,
        year: project.year || undefined,
        additionalImages: project.additional_images || undefined,
        liveUrl: project.live_url || undefined,
        caseStudyUrl: project.case_study_url || undefined,
      }))

      setProjects(transformedProjects)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Add new project
  const addProject = async (project: Omit<Project, 'id'>) => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([{
          title: project.title,
          category: project.category,
          image: project.image,
          description: project.description,
          overview: project.overview || null,
          technologies: project.technologies || null,
          features: project.features || null,
          year: project.year || null,
          additional_images: project.additionalImages || null,
          live_url: project.liveUrl || null,
          case_study_url: project.caseStudyUrl || null,
        }])
        .select()
        .single()

      if (error) throw error

      // Transform and add to local state
      const newProject: Project = {
        id: data.id,
        title: data.title,
        category: data.category,
        image: data.image,
        description: data.description,
        overview: data.overview || undefined,
        technologies: data.technologies || undefined,
        features: data.features || undefined,
        year: data.year || undefined,
        additionalImages: data.additional_images || undefined,
        liveUrl: data.live_url || undefined,
        caseStudyUrl: data.case_study_url || undefined,
      }

      setProjects(prev => [newProject, ...prev])
      return newProject
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add project')
      throw err
    }
  }

  // Update project
  const updateProject = async (id: number, updates: Partial<Project>) => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({
          title: updates.title,
          category: updates.category,
          image: updates.image,
          description: updates.description,
          overview: updates.overview || null,
          technologies: updates.technologies || null,
          features: updates.features || null,
          year: updates.year || null,
          additional_images: updates.additionalImages || null,
          live_url: updates.liveUrl || null,
          case_study_url: updates.caseStudyUrl || null,
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      // Transform and update local state
      const updatedProject: Project = {
        id: data.id,
        title: data.title,
        category: data.category,
        image: data.image,
        description: data.description,
        overview: data.overview || undefined,
        technologies: data.technologies || undefined,
        features: data.features || undefined,
        year: data.year || undefined,
        additionalImages: data.additional_images || undefined,
        liveUrl: data.live_url || undefined,
        caseStudyUrl: data.case_study_url || undefined,
      }

      setProjects(prev => prev.map(p => p.id === id ? updatedProject : p))
      return updatedProject
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update project')
      throw err
    }
  }

  // Delete project
  const deleteProject = async (id: number) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

      if (error) throw error

      setProjects(prev => prev.filter(p => p.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete project')
      throw err
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    refetch: fetchProjects
  }
}