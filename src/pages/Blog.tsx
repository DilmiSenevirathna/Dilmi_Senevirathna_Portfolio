import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  image?: string;
  video?: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: "4",
    title: "Why Automation Testing is the Future of Quality Engineering",
    summary: "Quality Assurance is no longer just about finding bugs — it's about building confidence in every release through automation, AI, and collaboration.",
    content: `Quality Assurance is no longer just about finding bugs — it's about building confidence in every release.

Over the past few years working in QA, I've had the opportunity to gain hands-on experience in test automation, and it has significantly shaped how I approach quality engineering. While manual testing builds the foundation for understanding systems and user behavior, automation enables teams to test faster, scale efficiently, and support modern development practices.

As development teams move toward CI/CD pipelines, faster release cycles, and AI-driven development, automation has become a critical part of delivering reliable software.

During this journey, I've worked with automation tools such as Cypress, Mabl AI, Selenium, Playwright, Postman, and TestNG, and other testing solutions to design and execute automated test suites that improve efficiency and coverage. Exploring both traditional automation frameworks and AI-powered testing platforms has been an exciting experience and a great opportunity to understand how the testing landscape is evolving.

## Key Lessons from Automation Testing

🔹 Speed and Efficiency Are Essential
Automated test suites can validate large portions of an application within minutes, helping teams detect issues earlier in the development cycle.

🔹 Automation Supports Rapid Development
With frequent releases and continuous integration, automated tests ensure quality can keep pace with development.

🔹 Consistency Builds Trust in Releases
Well-designed automation scripts provide reliable and repeatable validation across environments.

🔹 AI Is Shaping the Future of Testing
Tools like Mabl AI demonstrate how AI can assist with intelligent test creation, self-healing tests, and smarter execution strategies.

## Looking Ahead

Working with automation tools and integrating them into modern development workflows has shown me how powerful quality engineering becomes when automation is part of the process.

Quality today is not just a final checkpoint — it is a continuous practice powered by automation, AI, and collaboration.

Excited to keep expanding my skills in test automation, AI-assisted testing, and scalable quality practices.

What automation tools or AI testing platforms have you explored in your QA journey?`,
    video: `${import.meta.env.BASE_URL}videos/qa_automation_roadmap.mp4`,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
    date: "2025-03-14",
    readTime: "4 min read"
  },
  {
    id: "1",
    title: "Getting Started with Software Testing",
    summary: "An introduction to software testing fundamentals, covering the basics of manual and automated testing approaches for beginners.",
    content: `Software testing is a critical phase in the software development lifecycle that ensures the quality and reliability of applications. In this article, we'll explore the fundamental concepts that every QA engineer should know.

## Why Testing Matters

Testing helps identify bugs and issues before they reach end users. A well-tested application provides a better user experience and reduces maintenance costs in the long run.

## Types of Testing

### Manual Testing
Manual testing involves human testers executing test cases without automation tools. It's essential for exploratory testing and usability evaluation.

### Automated Testing
Automated testing uses scripts and tools to execute tests automatically. It's ideal for regression testing and repetitive tasks.

## Best Practices

1. Start testing early in the development cycle
2. Write clear and comprehensive test cases
3. Prioritize tests based on risk and impact
4. Maintain good documentation
5. Continuously improve your testing process

## Conclusion

Understanding these fundamentals is the first step toward becoming an effective QA professional. Practice regularly and stay updated with the latest testing methodologies.`,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    date: "2024-01-15",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "API Testing Best Practices",
    summary: "Learn the essential techniques for testing RESTful APIs, including tools, methodologies, and common pitfalls to avoid.",
    content: `API testing is crucial for ensuring that your backend services work correctly. This guide covers the best practices for effective API testing.

## Understanding API Testing

API testing focuses on verifying that APIs meet expectations for functionality, reliability, performance, and security.

## Essential Tools

- **Postman**: Popular tool for API development and testing
- **REST Assured**: Java library for REST API testing
- **Newman**: Command-line tool for running Postman collections

## Key Testing Areas

### Functional Testing
Verify that the API functions as expected, returning correct responses for given inputs.

### Performance Testing
Measure response times and throughput under various load conditions.

### Security Testing
Check for vulnerabilities like SQL injection, authentication issues, and data exposure.

## Common Pitfalls

1. Not testing edge cases
2. Ignoring error responses
3. Skipping authentication tests
4. Not validating response schemas

## Conclusion

Thorough API testing ensures reliable integrations and a stable application ecosystem.`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    date: "2024-02-10",
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "Mobile App Testing Strategies",
    summary: "Comprehensive guide to testing mobile applications across different platforms, devices, and network conditions.",
    content: `Mobile app testing presents unique challenges compared to web or desktop applications. This article explores strategies for effective mobile testing.

## Mobile Testing Challenges

- Device fragmentation
- OS version differences
- Network variability
- Battery and performance constraints

## Testing Approaches

### Real Device Testing
Testing on actual devices provides the most accurate results but requires significant investment.

### Emulator/Simulator Testing
Useful for early-stage testing and covering multiple device configurations.

### Cloud-Based Testing
Services like BrowserStack and Sauce Labs provide access to hundreds of real devices.

## Key Test Areas

1. **UI/UX Testing**: Ensure the app looks and feels right
2. **Functional Testing**: Verify all features work correctly
3. **Performance Testing**: Check app responsiveness and resource usage
4. **Compatibility Testing**: Test across different devices and OS versions
5. **Security Testing**: Protect user data and privacy

## Automation Tools

- Appium for cross-platform automation
- XCUITest for iOS
- Espresso for Android

## Conclusion

A comprehensive mobile testing strategy combines manual and automated approaches across real devices and emulators.`,
    video: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    date: "2024-03-05",
    readTime: "8 min read"
  }
];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button
              variant="ghost"
              onClick={() => setSelectedArticle(null)}
              className="mb-6 hover:bg-muted"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>

            <article>
              {selectedArticle.video ? (
                <div className="aspect-video rounded-xl overflow-hidden mb-8">
                  <video
                    src={selectedArticle.video}
                    poster={selectedArticle.image}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : selectedArticle.image ? (
                <div className="aspect-video rounded-xl overflow-hidden mb-8">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}

              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(selectedArticle.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-6">{selectedArticle.title}</h1>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n');
                    const isOrdered = paragraph.startsWith('1.');
                    const ListTag = isOrdered ? 'ol' : 'ul';
                    return (
                      <ListTag key={index} className={`my-4 pl-6 ${isOrdered ? 'list-decimal' : 'list-disc'}`}>
                        {items.map((item, i) => (
                          <li key={i} className="mb-2 text-muted-foreground">
                            {item.replace(/^[\d]+\.\s|^-\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                          </li>
                        ))}
                      </ListTag>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights and articles about software testing, QA best practices, and technology trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="aspect-video overflow-hidden">
                  {article.video ? (
                    <video
                      src={article.video}
                      poster={article.image}
                      muted
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.summary}
                  </p>

                  <Button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
