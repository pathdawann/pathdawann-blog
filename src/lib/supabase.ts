import { createClient } from '@supabase/supabase-js';

// Astro lee automáticamente las variables de tu archivo .env que empiezan con PUBLIC_
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Creamos y exportamos la conexión para poder usarla desde cualquier componente
export const supabase = createClient(supabaseUrl, supabaseAnonKey);