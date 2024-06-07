
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://kjgwykqvzjlkvwihbxhe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZ3d5a3F2empsa3Z3aWhieGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3NjM1NDUsImV4cCI6MjAzMzMzOTU0NX0.TKbjtneJ6lzrh2Gw_HMbDrSzQAsqh5Yeld3i_10mynA';

const supabase = createClient(supabaseUrl, supabaseKey);
        
try {
    const supabase = createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error('Error initializing Supabase client:', error);
  }

  const checkSupabaseConnection = async () => {
    try {
      // Perform a simple query to check if the connection is successful
      const { error } = await supabase
        .from('your_table') // Replace 'your_table' with an existing table name
        .select('id')
        .limit(1);
        
      if (error) {
        console.error('Error connecting to Supabase:', error.message);
        return false;
      } else {
        console.log('Supabase connected successfully');
        return true;
      }
    } catch (error) {
      console.error('Unexpected error while connecting to Supabase:', error.message);
      return false;
    }
  };
  
  // Example usage
  checkSupabaseConnection();
  
  export default supabase;

  