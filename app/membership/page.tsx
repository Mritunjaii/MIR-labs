import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MembershipPage() {
  const membershipTypes = [
    {
      title: "Professional Member",
      price: "$75/year",
      description: "For experienced professionals and researchers",
      details:
        "Professional membership is open to individuals who by experience give evidence of competence in an MIR Labs designated field. The designated fields are: Engineering, Computer Sciences and Information Technology, Physical Sciences, Biological and Medical Sciences, Mathematics, Technical Communications, Education, Management, and Law and Policy.",
      benefits: [
        "Access to cutting-edge technical periodicals",
        "Conference discounts and networking opportunities",
        "Educational resources and worldwide networking",
        "Deep discounts on Society memberships",
        "Collaboration with leading experts",
      ],
      color: "bg-blue-500",
    },
    {
      title: "Student Member",
      price: "Discounted Rate",
      description: "For undergraduate and graduate students",
      details:
        "A Student/Graduate Student member must carry at least 50% of a normal full-time academic program as a registered undergraduate or graduate student in a regular course of study in MIR Labs designated fields. The total cumulative period for a member to hold the Student member grade and/or the Graduate Student member grade is limited to eight years.",
      benefits: [
        "Access to research publications",
        "Student chapter participation",
        "Mentorship opportunities",
        "Conference discounts",
        "Educational resources access",
      ],
      color: "bg-green-500",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <div className="text-center py-12 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Membership</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our global community of technology and engineering professionals
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* When You Join MIR LABS */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-3xl text-center">When you join MIR LABS:</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>
                    Join a community of more than 400,000 technology and engineering professionals united by a common
                    desire to continuously learn, interact, collaborate, and innovate
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Access the resources and opportunities you need to keep on top of changes in technology</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>
                    Network with other professionals in your local area or within a specific technical interest
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span>Mentor the next generation of engineers and technologists</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                There's no better time to take advantage of what MIR LABS has to offer. Join now and get membership
                benefits through the end of 2023, plus save 50% on membership dues.*
              </p>
              <p className="text-gray-700 leading-relaxed">
                MIR Labs members stay technically current, network with colleagues locally and abroad, and collaborate
                on research and projects with leading experts -- all while taking advantage of specialized
                opportunities. Discover which Society, or Societies, best match your technical interests by joining
                today to take advantage of membership benefits ranging from access to cutting-edge technical periodicals
                and conference discounts to educational resources and worldwide networking opportunities. In addition,
                MIR Labs members enjoy deep discounts on Society memberships.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Membership Types */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {membershipTypes.map((type, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className={`h-2 ${type.color}`}></div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">{type.title}</CardTitle>
              <div className="text-2xl font-bold text-blue-600 mb-2">{type.price}</div>
              <p className="text-gray-600">{type.description}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">{type.details}</p>

              <h4 className="font-semibold mb-3">Benefits Include:</h4>
              <ul className="space-y-2 mb-6">
                {type.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join MIR Labs?</h2>
          <p className="text-xl mb-6">
            Become part of our international community advancing machine intelligence research
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
