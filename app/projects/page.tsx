import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Soft Computing Research",
      description:
        "Advanced research in fuzzy logic, neural networks, and evolutionary computing methodologies for solving complex real-world problems.",
      status: "Active",
      category: "Research",
    },
    {
      title: "Computer Science Applications",
      description:
        "Developing applications in Agriculture, Biomedicine, Bioinformatics, Business, Chemical, Environment, Education, E-Learning, Geography, Mathematics and Physics.",
      status: "Active",
      category: "Applications",
    },
    {
      title: "Information Technology Solutions",
      description:
        "Creating innovative IT solutions and methodologies for various industrial and academic applications.",
      status: "Active",
      category: "Technology",
    },
    {
      title: "International Academic Collaboration",
      description:
        "Facilitating research collaboration between international institutions and promoting knowledge exchange.",
      status: "Ongoing",
      category: "Collaboration",
    },
    {
      title: "Conference and Workshop Organization",
      description:
        "Organizing international conferences and workshops to promote research dissemination and networking.",
      status: "Ongoing",
      category: "Events",
    },
    {
      title: "Academic Publication Support",
      description:
        "Publishing high quality academic international journals and conference proceedings in related fields.",
      status: "Active",
      category: "Publications",
    },
  ]

  const simulations = [
    { name: "Qualnet", description: "Network simulation and modeling platform for research applications" },
    { name: "MatLab", description: "Mathematical computing environment for algorithm development and data analysis" },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Exploring cutting-edge research in machine intelligence, soft computing, and information technology
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge
                  variant={
                    project.status === "Active" ? "default" : project.status === "Completed" ? "secondary" : "outline"
                  }
                >
                  {project.status}
                </Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Simulation Tools Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Simulation & Development Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {simulations.map((tool, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Research Areas */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Research Focus Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-sm text-gray-600">Machine learning, deep learning, and cognitive computing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-semibold mb-2">Soft Computing</h3>
              <p className="text-sm text-gray-600">Fuzzy logic, neural networks, and evolutionary algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Data Science</h3>
              <p className="text-sm text-gray-600">Big data analytics, pattern recognition, and visualization</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
