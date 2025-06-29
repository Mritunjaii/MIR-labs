import { Card, CardContent } from "@/components/ui/card"

export default function DirectorPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Director</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <Card>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Director Photo</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Dr. [Director Name]</h2>
              <h3 className="text-xl text-blue-600 mb-6">Director, MIR Labs</h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Director of MIR Labs leads the organization's strategic vision and oversees the global research
                  initiatives in machine intelligence and soft computing. With extensive experience in academic
                  leadership and research management, the Director ensures that MIR Labs maintains its position as a
                  premier international scientific organization.
                </p>

                <p>
                  Under the Director's leadership, MIR Labs has expanded its global reach, established partnerships with
                  leading universities and research institutions worldwide, and continues to foster collaborative
                  research in cutting-edge technologies.
                </p>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Strategic planning and organizational leadership</li>
                    <li>Oversight of international research collaborations</li>
                    <li>Conference and workshop organization</li>
                    <li>Academic publication and journal management</li>
                    <li>Member engagement and community building</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Research Interests:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Machine Intelligence and Artificial Intelligence</li>
                    <li>Soft Computing and Fuzzy Systems</li>
                    <li>Neural Networks and Deep Learning</li>
                    <li>Evolutionary Computing</li>
                    <li>Computer Science Education</li>
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
