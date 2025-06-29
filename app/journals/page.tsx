import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function JournalsPage() {
  const journals = [
    {
      title: "International Journal of Machine Intelligence and Soft Computing",
      issn: "ISSN: 2456-7890",
      impact: "Impact Factor: 3.2",
      frequency: "Quarterly",
      description:
        "Premier journal focusing on theoretical and practical aspects of machine intelligence, soft computing, and their applications across various domains.",
      image: "/placeholder.svg?height=300&width=200",
      topics: ["Machine Learning", "Neural Networks", "Fuzzy Systems", "Evolutionary Algorithms"],
      status: "Open for Submissions",
    },
    {
      title: "Journal of Computer Science and Information Technology",
      issn: "ISSN: 2456-7891",
      impact: "Impact Factor: 2.8",
      frequency: "Bi-monthly",
      description:
        "Comprehensive journal covering all aspects of computer science, information technology, and computational methods.",
      image: "/placeholder.svg?height=300&width=200",
      topics: ["Software Engineering", "Database Systems", "Computer Networks", "Cybersecurity"],
      status: "Open for Submissions",
    },
    {
      title: "International Journal of Bioinformatics and Computational Biology",
      issn: "ISSN: 2456-7892",
      impact: "Impact Factor: 2.5",
      frequency: "Quarterly",
      description:
        "Interdisciplinary journal at the intersection of biology, computer science, and mathematics, focusing on computational approaches to biological problems.",
      image: "/placeholder.svg?height=300&width=200",
      topics: ["Genomics", "Proteomics", "Systems Biology", "Computational Medicine"],
      status: "Special Issue Call",
    },
    {
      title: "Journal of Emerging Technologies in Engineering",
      issn: "ISSN: 2456-7893",
      impact: "Impact Factor: 2.1",
      frequency: "Quarterly",
      description:
        "Cutting-edge research in emerging engineering technologies, including IoT, blockchain, quantum computing, and sustainable technologies.",
      image: "/placeholder.svg?height=300&width=200",
      topics: ["IoT", "Blockchain", "Quantum Computing", "Green Technology"],
      status: "Open for Submissions",
    },
  ]

  const submissionGuidelines = [
    "Original research articles, review papers, and technical notes are welcome",
    "All submissions undergo rigorous peer review process",
    "Manuscripts should be prepared according to journal formatting guidelines",
    "Plagiarism check is mandatory for all submissions",
    "Average review time is 8-12 weeks",
    "Open access options available for wider dissemination",
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Academic Journals</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Publish your research in our high-quality, peer-reviewed international journals
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Journals Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {journals.map((journal, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="flex">
              <div className="w-1/3">
                <img
                  src={journal.image || "/placeholder.svg"}
                  alt={journal.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={journal.status === "Open for Submissions" ? "default" : "secondary"}>
                      {journal.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{journal.title}</CardTitle>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>{journal.issn}</p>
                    <p>{journal.impact}</p>
                    <p>Published: {journal.frequency}</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm mb-3">{journal.description}</p>

                  <div className="mb-3">
                    <h4 className="font-semibold text-sm mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {journal.topics.map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button size="sm" className="w-full">
                    Submit Manuscript
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Submission Guidelines */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Submission Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {submissionGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700 text-sm">{guideline}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Why Publish with MIR Labs?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🌍</span>
                <div>
                  <h4 className="font-semibold">Global Reach</h4>
                  <p className="text-sm text-gray-600">International readership and indexing in major databases</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">⚡</span>
                <div>
                  <h4 className="font-semibold">Fast Review</h4>
                  <p className="text-sm text-gray-600">Efficient peer review process with expert reviewers</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🏆</span>
                <div>
                  <h4 className="font-semibold">Quality Standards</h4>
                  <p className="text-sm text-gray-600">High editorial standards and rigorous quality control</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">📖</span>
                <div>
                  <h4 className="font-semibold">Open Access</h4>
                  <p className="text-sm text-gray-600">Options for open access publication and wider visibility</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Publish Your Research?</h2>
          <p className="text-xl mb-6">Join thousands of researchers who have published with MIR Labs journals</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Submit Your Paper
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
            >
              Author Guidelines
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
