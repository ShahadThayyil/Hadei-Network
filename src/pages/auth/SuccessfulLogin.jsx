import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

export default function SuccessfulLogin() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        navigate('/login', { replace: true })
        return
      }

      const { data } = await supabase
        .from('profiles')
        .select('full_name, email, phone, role, kyc_status, created_at')
        .eq('id', session.user.id)
        .single()

      setProfile(data)
      setLoading(false)
    }

    load()
  }, [navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const fields = [
    { label: 'Full Name', value: profile?.full_name },
    { label: 'Email', value: profile?.email },
    { label: 'Phone', value: profile?.phone || '—' },
    { label: 'Role', value: profile?.role },
    { label: 'KYC Status', value: profile?.kyc_status },
    {
      label: 'Member Since',
      value: profile?.created_at
        ? new Date(profile.created_at).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        : '—',
    },
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mb-12">
        <span className="text-yellow-400 text-xl font-black tracking-tighter">HADEI</span>
        <span className="text-white text-xl font-thin tracking-widest">NETWORK</span>
      </Link>

      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-6 bg-yellow-400" />
          <span className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase">
            Authenticated
          </span>
        </div>
        <h1 className="text-white text-3xl font-black tracking-tight mb-8">
          You have logged in successfully.
        </h1>

        {/* Details card */}
        <div className="border border-white/10 rounded-sm divide-y divide-white/10">
          {fields.map(({ label, value }) => (
            <div key={label} className="flex items-start justify-between px-5 py-4 gap-4">
              <span className="text-white/40 text-xs font-bold tracking-widest uppercase shrink-0">
                {label}
              </span>
              <span className="text-white text-sm text-right capitalize">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Sign out */}
        <button
          onClick={async () => {
            await supabase.auth.signOut()
            navigate('/login', { replace: true })
          }}
          className="mt-8 w-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 text-xs tracking-widest uppercase py-3 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
