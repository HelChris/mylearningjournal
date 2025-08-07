import { supabase } from '/js/constants/supabase.mjs';

export async function fetchJournal() {
  try {
    const { data, error } = await supabase
      .from('journal') // from (' supabase table name')
      .select('*') // * means "get all columns"

    if (error) {
      console.error('Database error:', error)
      return null
    }

    console.log('Fetched data:', data)
    return data
  } catch (error) {
    console.error('Network error:', error)
    return null
  }
}