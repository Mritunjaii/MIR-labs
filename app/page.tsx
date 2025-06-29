import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to MIR Labs</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Advancing Machine Intelligence Research Through International Collaboration
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
          >
            <Link href="/membership">Join Us</Link>
          </Button>
        </div>
      </section>

      {/* Quick Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Research Excellence</h3>
            <p className="text-gray-600">
              Fostering collaborative interdisciplinary research in state-of-the-art methodologies
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Global Network</h3>
            <p className="text-gray-600">International scientific organization connecting eminent scholars worldwide</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Publications</h3>
            <p className="text-gray-600">High quality academic international journals and conference proceedings</p>
          </CardContent>
        </Card>
      </div>

      {/* MIR Labs Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">MIR Labs</h2>
          <p className="text-gray-700 leading-relaxed">
            MIR Labs Society is a non-profit international scientific organization of eminent scholars affianced in Soft
            Computing Computer Science and Information Technology. The MIR Labs Society members include research and
            development center heads, faculty deans, department heads, professors, research scientists, engineers,
            scholars, experienced software development directors, managers and engineers, university postgraduate and
            undergraduate engineering and technology students, etc.
          </p>
        </CardContent>
      </Card>

      {/* Projects Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-700 leading-relaxed">
            MIR Labs Society plays a prominent role and promotes developments in Soft Computing, Computer Science and
            Information Technology in a wide range of ways. The mission of MIR Labs Society is to foster and conduct
            collaborative interdisciplinary research in state-of-the-art methodologies and technologies within its areas
            of expertise. MIR Labs Society organizes conferences, workshops, and provides sponsor or technical support
            for conferences and workshops; it also publishes high quality academic international journals in related
            fields.
          </p>
        </CardContent>
      </Card>

      {/* Simulation Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Simulation</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Qualnet</li>
            <li>MatLab</li>
          </ul>
        </CardContent>
      </Card>

      {/* Highlighted Statement */}
      <div className="text-center py-4">
        <p className="text-green-600 font-semibold text-lg">
          MIR Labs Society is a non-profit international scientific organization.
        </p>
      </div>

      {/* Objectives Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Objectives</h2>
          <p className="text-gray-800 font-semibold mb-4">
            The main objectives of Machine Intelligence Research Labs (MIR Labs) are as follows:-
          </p>
          <ul className="text-gray-700 space-y-3 leading-relaxed">
            <li>
              To initiate new innovative research directions by networking together the critical mass of resources
            </li>
            <li>
              To strengthen scientific and technological excellence on a particular research area, which is important to
              a particular geographical region / area / country etc.
            </li>
            <li>
              To integrate the various research efforts of the scientific team to be a source of innovation on possible
              scientific, technological and socio-economic trajectories to mould the future of Machine Intelligence
              Research Labs.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
