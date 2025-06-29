import { Card, CardContent } from "@/components/ui/card"

export default function ChairpersonPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Chairperson</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <Card>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Chairperson Photo</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Prof. [Chairperson Name]</h2>
              <h3 className="text-xl text-blue-600 mb-6">Chairperson, MIR Labs</h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Chairperson of MIR Labs serves as the academic leader and primary representative of the
                  organization's scientific mission. With distinguished expertise in machine intelligence research and a
                  proven track record in academic excellence, the Chairperson guides the organization's research
                  direction and maintains its high scientific standards.
                </p>

                <p>
                  As the academic head of MIR Labs, the Chairperson works closely with the international scientific
                  community to advance research in soft computing, artificial intelligence, and information technology.
                  The Chairperson also plays a crucial role in maintaining the organization's reputation for academic
                  rigor and innovation.
                </p>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Academic Leadership:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Scientific program oversight and quality assurance</li>
                    <li>Research collaboration facilitation</li>
                    <li>Academic standards and ethics enforcement</li>
                    <li>Peer review process management</li>
                    <li>International academic relations</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Areas of Expertise:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Computational Intelligence</li>
                    <li>Machine Learning Algorithms</li>
                    <li>Pattern Recognition</li>
                    <li>Data Mining and Knowledge Discovery</li>
                    <li>Intelligent Systems Design</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Professional Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Published over 100 research papers in top-tier journals</li>
                    <li>Keynote speaker at major international conferences</li>
                    <li>Editorial board member of several prestigious journals</li>
                    <li>Recipient of multiple academic awards and honors</li>
                    <li>Mentor to numerous PhD students and researchers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
