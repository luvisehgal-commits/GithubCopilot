import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  Link2,
  BarChart3,
  Zap,
  Shield,
  QrCode,
  Share2,
  TrendingUp,
  Clock,
} from "lucide-react";

export default async function Home(): Promise<React.ReactElement> {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Shorten Your Links,
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amplify Your Reach
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Create shareable, trackable short links in seconds. Perfect for
              social media, marketing campaigns, and sharing with friends.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <SignUpButton>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Get Started Free
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to shorten, share, and track your links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-blue-500/20">
                <Link2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Instant Shortening
              </h3>
              <p className="text-slate-400">
                Convert long URLs to short, memorable links in seconds
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-purple-500/20">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Detailed Analytics
              </h3>
              <p className="text-slate-400">
                Track clicks, referrers, and geographic data in real-time
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-pink-500/20">
                <QrCode className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                QR Codes
              </h3>
              <p className="text-slate-400">
                Generate scannable QR codes for every shortened link
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-green-500/20">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Secure & Safe
              </h3>
              <p className="text-slate-400">
                Password protect your links and set expiration dates
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-yellow-500/20">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-slate-400">
                Optimized redirects that load instantly every time
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-cyan-500/20">
                <Share2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Easy Sharing
              </h3>
              <p className="text-slate-400">
                Copy, share, or integrate links with your favorite platforms
              </p>
            </div>

            {/* Feature 7 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-orange-500/20">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom URLs
              </h3>
              <p className="text-slate-400">
                Create branded short links to reflect your identity
              </p>
            </div>

            {/* Feature 8 */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="mb-4 p-3 w-fit rounded-lg bg-red-500/20">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Link Management
              </h3>
              <p className="text-slate-400">
                Organize, edit, and manage all your links in one dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300">
              Join thousands of users who are already shortening and tracking
              their links
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignUpButton>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Sign Up Now
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 Link Shortener. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
