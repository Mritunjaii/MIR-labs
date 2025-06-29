import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ConferencesPage() {
  const conferences = [
    {
      title: "International Conference on Machine Intelligence and Soft Computing 2024",
      date: "March 15-17, 2024",
      location: "Singapore",
      status: "Registration Open",
      description:
        "Join leading researchers and practitioners for three days of cutting-edge presentations on machine intelligence, soft computing, and AI applications.",
      image: "/placeholder.svg?height=200&width=300",
      topics: ["Machine Learning", "Neural Networks", "Fuzzy Logic", "Evolutionary Computing"],
    },
    {
      title: "MIR Labs International Symposium on Computer Science 2024",
      date: "June 10-12, 2024",
      location: "New York, USA",
      status: "Call for Papers",
      description:
        "Annual gathering featuring research presentations in computer science, information technology, and related fields.",
      image: "/placeholder.svg?height=200&width=300",
      topics: ["Computer Vision", "Data Mining", "Software Engineering", "Cybersecurity"],
    },
    {
      title: "Workshop on Emerging Technologies in IT 2024",
      date: "September 5-7, 2024",
      location: "London, UK",
      status: "Coming Soon",
      description:
        "Hands-on workshop covering the latest developments in information technology and emerging computational paradigms.",
      image: "/placeholder.svg?height=200&width=300",
      topics: ["IoT", "Blockchain", "Cloud Computing", "Edge Computing"],
    },
    {
      title: "International Conference on Bioinformatics and Computational Biology 2024",
      date: "November 20-22, 2024",
      location: "Tokyo, Japan",
      status: "Planning",
      description:
        "Interdisciplinary conference focusing on computational approaches to biological problems and bioinformatics applications.",
      image: "/placeholder.svg?height=200&width=300",
      topics: ["Genomics", "Proteomics", "Systems Biology", "Medical Informatics"],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Conferences</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our international conferences and workshops to advance machine intelligence research and network with
          leading experts
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Conferences Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {conferences.map((conference, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative">
              <img
                src={conference.image || "/placeholder.svg"}
                alt={conference.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  variant={
                    conference.status === "Registration Open"
                      ? "default"
                      : conference.status === "Call for Papers"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {conference.status}
                </Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{conference.title}</CardTitle>
              <div className="text-gray-600">
                <p>📅 {conference.date}</p>
                <p>📍 {conference.location}</p>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-gray-700 mb-4">{conference.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {conference.topics.map((topic, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full">
                {conference.status === "Registration Open"
                  ? "Register Now"
                  : conference.status === "Call for Papers"
                    ? "Submit Paper"
                    : "Learn More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Conference Benefits */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Attend MIR Labs Conferences?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold mb-2">Expert Speakers</h3>
              <p>Learn from leading researchers and industry experts in machine intelligence and computing</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p>Connect with professionals and researchers from around the world</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Latest Research</h3>
              <p>Stay updated with cutting-edge research and technological advancements</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
