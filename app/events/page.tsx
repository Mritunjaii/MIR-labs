import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "International Conference on Machine Intelligence 2024",
      date: "March 15-17, 2024",
      location: "Singapore",
      type: "Conference",
      status: "Registration Open",
      description:
        "Join leading researchers and practitioners for three days of cutting-edge presentations on machine intelligence, soft computing, and AI applications.",
    },
    {
      title: "Workshop on Deep Learning Applications",
      date: "April 22, 2024",
      location: "Virtual",
      type: "Workshop",
      status: "Coming Soon",
      description:
        "Hands-on workshop covering the latest developments in deep learning with practical applications in computer vision and NLP.",
    },
    {
      title: "MIR Labs Annual Symposium",
      date: "June 10-12, 2024",
      location: "New York, USA",
      type: "Symposium",
      status: "Call for Papers",
      description:
        "Annual gathering of MIR Labs members featuring research presentations, networking sessions, and awards ceremony.",
    },
    {
      title: "Summer School on Quantum Computing",
      date: "July 8-19, 2024",
      location: "London, UK",
      type: "Summer School",
      status: "Applications Open",
      description:
        "Two-week intensive program covering quantum algorithms, quantum machine learning, and practical quantum computing.",
    },
  ]

  const pastEvents = [
    {
      title: "AI Ethics and Society Conference 2023",
      date: "November 2023",
      location: "Tokyo, Japan",
      attendees: "250+",
    },
    {
      title: "Soft Computing Workshop 2023",
      date: "September 2023",
      location: "Berlin, Germany",
      attendees: "180+",
    },
    {
      title: "MIR Labs Research Showcase 2023",
      date: "May 2023",
      location: "Virtual",
      attendees: "400+",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Events</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our conferences, workshops, and academic gatherings to advance machine intelligence research
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="default">{event.type}</Badge>
                  <Badge variant={event.status === "Registration Open" ? "default" : "secondary"}>{event.status}</Badge>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <div className="text-gray-600">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Button className="w-full">
                  {event.status === "Registration Open"
                    ? "Register Now"
                    : event.status === "Call for Papers"
                      ? "Submit Paper"
                      : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Event Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Types</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="font-bold mb-2">Conferences</h3>
              <p className="text-sm text-gray-600">
                International gatherings with keynote speakers and research presentations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-bold mb-2">Workshops</h3>
              <p className="text-sm text-gray-600">
                Hands-on sessions focusing on specific technologies and methodologies
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-bold mb-2">Summer Schools</h3>
              <p className="text-sm text-gray-600">
                Intensive educational programs for students and early-career researchers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold mb-2">Symposiums</h3>
              <p className="text-sm text-gray-600">
                Annual meetings featuring awards, networking, and strategic discussions
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Events */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Past Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">📅 {event.date}</p>
                <p className="text-gray-600 mb-1">📍 {event.location}</p>
                <p className="text-gray-600">👥 {event.attendees} attendees</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6">
            Subscribe to our newsletter to receive updates about upcoming events and conferences
          </p>
          <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
            Subscribe Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
