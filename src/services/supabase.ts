import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tunsoawagihfqfujcxqz.supabase.co'
const supabaseKey = 'sb_publishable_VVsRpcJ1Mux0bo-gruWakA_sqMiZ4Cv'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)