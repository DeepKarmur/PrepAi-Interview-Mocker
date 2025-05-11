"use client"

import Link from "next/link"
import { BookOpen, Code, Lightbulb, MessageSquare, Briefcase, Brain, ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
    return (
        <div className="container mx-auto py-10 px-4 md:px-6">
            <div className="space-y-4 mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Interview Preparation Resources</h1>
                <p className="text-muted-foreground max-w-3xl">
                    Comprehensive learning materials to help you prepare for technical and behavioral interviews. Browse our
                    curated collection of guides, articles, and best practices.
                </p>
            </div>

            <Tabs defaultValue="all" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-auto">
                    <TabsTrigger value="all">All Resources</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                    <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
                    <TabsTrigger value="cs-fundamentals">CS Fundamentals</TabsTrigger>
                    <TabsTrigger value="industry">Industry Specific</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8">
                    {/* Featured Resources */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Featured Resources</h2>
                            <Link href="/resources/featured" className="text-sm text-primary hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card className="flex flex-col">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle>Complete System Design Guide</CardTitle>
                                            <CardDescription className="mt-1">
                                                Master system design interviews with our comprehensive guide
                                            </CardDescription>
                                        </div>
                                        <Badge>Featured</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert flex-grow">
                                    <p>
                                        Learn how to approach system design interviews with confidence. This guide covers scalability,
                                        reliability, availability, and performance considerations for designing large-scale systems.
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-3">
                                    <Link
                                        href="/resources/system-design-guide"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card className="flex flex-col">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle>Behavioral Interview Mastery</CardTitle>
                                            <CardDescription className="mt-1">Proven strategies for behavioral questions</CardDescription>
                                        </div>
                                        <Badge>Featured</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert flex-grow">
                                    <p>
                                        Master the STAR method and learn how to structure compelling stories that showcase your skills and
                                        experience. Includes 50+ example answers to common behavioral questions.
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-3">
                                    <Link
                                        href="/resources/behavioral-mastery"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card className="flex flex-col">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle>Data Structures & Algorithms</CardTitle>
                                            <CardDescription className="mt-1">Essential concepts for technical interviews</CardDescription>
                                        </div>
                                        <Badge>Featured</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert flex-grow">
                                    <p>
                                        A comprehensive review of fundamental data structures and algorithms with example problems, time
                                        complexity analysis, and implementation strategies.
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-3">
                                    <Link href="/resources/dsa-guide" className="text-primary hover:underline text-sm font-medium">
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    {/* Technical Resources */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Technical Resources</h2>
                            <Link href="/resources/technical" className="text-sm text-primary hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Code className="h-5 w-5 text-primary" />
                                        <CardTitle>Coding Interview Patterns</CardTitle>
                                    </div>
                                    <CardDescription>Common patterns to solve algorithm problems</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn the 16 core patterns that can help you solve over 90% of coding interview questions. Includes
                                        sliding window, two pointers, fast & slow pointers, and more.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/resources/coding-patterns" className="text-primary hover:underline text-sm font-medium">
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Brain className="h-5 w-5 text-primary" />
                                        <CardTitle>System Design Fundamentals</CardTitle>
                                    </div>
                                    <CardDescription>Core concepts for designing scalable systems</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Understand the building blocks of system design: load balancing, caching, database sharding, CAP
                                        theorem, and more. Essential reading for senior-level interviews.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/system-design-fundamentals"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Code className="h-5 w-5 text-primary" />
                                        <CardTitle>Frontend Interview Guide</CardTitle>
                                    </div>
                                    <CardDescription>Comprehensive guide for frontend developers</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Master JavaScript, CSS, React, and web performance concepts. Includes common frontend interview
                                        questions and practical coding challenges.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/resources/frontend-guide" className="text-primary hover:underline text-sm font-medium">
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    {/* Behavioral Resources */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Behavioral Resources</h2>
                            <Link href="/resources/behavioral" className="text-sm text-primary hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                        <CardTitle>STAR Method Explained</CardTitle>
                                    </div>
                                    <CardDescription>Structure your behavioral responses effectively</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn how to use the Situation-Task-Action-Result framework to craft compelling stories that
                                        showcase your skills and experience in behavioral interviews.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/resources/star-method" className="text-primary hover:underline text-sm font-medium">
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Lightbulb className="h-5 w-5 text-primary" />
                                        <CardTitle>Answering Difficult Questions</CardTitle>
                                    </div>
                                    <CardDescription>Strategies for challenging behavioral scenarios</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Techniques for addressing questions about failures, conflicts, and weaknesses. Learn how to frame
                                        negative experiences in a positive, growth-oriented way.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/difficult-questions"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-5 w-5 text-primary" />
                                        <CardTitle>Company Research Guide</CardTitle>
                                    </div>
                                    <CardDescription>How to research companies effectively</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn how to research a company's culture, values, products, and challenges to tailor your interview
                                        responses and ask insightful questions.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/resources/company-research" className="text-primary hover:underline text-sm font-medium">
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    {/* Latest Articles */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Latest Articles</h2>
                            <Link href="/resources/articles" className="text-sm text-primary hover:underline">
                                View all
                            </Link>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Microservices vs. Monoliths</CardTitle>
                                    <CardDescription>Published 2 weeks ago</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        An in-depth comparison of microservices and monolithic architectures, with guidance on when to use
                                        each approach in system design interviews.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/articles/microservices-vs-monoliths"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Negotiating Your Offer</CardTitle>
                                    <CardDescription>Published 3 weeks ago</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Practical strategies for negotiating your job offer, including how to research compensation, timing
                                        your negotiation, and what to say.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/articles/negotiating-offers"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>React Performance Optimization</CardTitle>
                                    <CardDescription>Published 1 month ago</CardDescription>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn advanced techniques for optimizing React applications, including memoization, code splitting,
                                        and effective state management strategies.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/articles/react-performance"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read article →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="technical" className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Algorithms & Data Structures</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Arrays & Strings</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Comprehensive guide to array and string manipulation techniques, including two pointers, sliding
                                        window, and in-place operations.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/arrays-strings"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Trees & Graphs</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn traversal algorithms, balanced trees, graph representations, and common algorithms like BFS,
                                        DFS, Dijkstra's, and more.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/trees-graphs"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Dynamic Programming</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Master dynamic programming with step-by-step explanations, common patterns, and practice problems
                                        with detailed solutions.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/dynamic-programming"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Sorting & Searching</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Detailed explanations of sorting algorithms, binary search variations, and their applications in
                                        coding interviews.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/sorting-searching"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Linked Lists</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn techniques for manipulating linked lists, including fast & slow pointers, reversing, and
                                        detecting cycles.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/linked-lists"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Recursion & Backtracking</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Master recursive thinking and backtracking algorithms with visualizations and step-by-step examples.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/recursion-backtracking"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">System Design</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Scalability Fundamentals</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn how to design systems that scale horizontally and vertically, with real-world examples and
                                        best practices.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/scalability"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Database Design</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Comprehensive guide to SQL vs. NoSQL, sharding, indexing, and choosing the right database for
                                        different use cases.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/database-design"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Distributed Systems</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn about consistency models, fault tolerance, consensus algorithms, and distributed data
                                        processing.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/distributed-systems"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Language-Specific Guides</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>JavaScript Interview Guide</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Deep dive into JavaScript concepts like closures, prototypes, async/await, and common JavaScript
                                        interview questions.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/javascript-guide"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Python Interview Guide</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Master Python-specific concepts, data structures, memory management, and common Python interview
                                        questions.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/python-guide"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Java Interview Guide</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Comprehensive coverage of Java concepts, collections, multithreading, memory management, and common
                                        Java interview questions.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/technical/java-guide"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="behavioral" className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Behavioral Interview Fundamentals</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>STAR Method Deep Dive</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Master the Situation-Task-Action-Result framework with detailed examples and templates for different
                                        types of behavioral questions.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/star-method"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Storytelling in Interviews</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Learn how to craft compelling narratives that showcase your skills and experience while keeping the
                                        interviewer engaged.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/storytelling"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Preparing Your Stories</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        A systematic approach to identifying and preparing stories from your experience that demonstrate key
                                        competencies.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/preparing-stories"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Common Behavioral Questions</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Leadership & Initiative</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Sample answers and strategies for questions about leadership, taking initiative, and driving results
                                        without formal authority.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/leadership-questions"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Teamwork & Collaboration</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        How to answer questions about working in teams, handling conflicts, and collaborating with diverse
                                        stakeholders.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/teamwork-questions"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Problem-Solving & Challenges</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Strategies for discussing how you've overcome obstacles, solved complex problems, and handled
                                        difficult situations.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/problem-solving-questions"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Failure & Learning</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        How to discuss failures and mistakes in a positive light that demonstrates growth, learning, and
                                        resilience.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/failure-questions"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Strengths & Weaknesses</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Frameworks for discussing your strengths without sounding arrogant and weaknesses without
                                        undermining your candidacy.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/strengths-weaknesses"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Career Motivation</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        How to articulate your career goals, why you're interested in the role, and what motivates you
                                        professionally.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/motivation-questions"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Company-Specific Preparation</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Amazon Leadership Principles</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Detailed guide to Amazon's 16 leadership principles and how to prepare stories that demonstrate
                                        alignment with each principle.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/amazon-principles"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Google's Approach to Behavioral</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Understanding Google's behavioral interview format and how to prepare for their focus on leadership,
                                        role-related knowledge, and Googleyness.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/google-approach"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Microsoft's Growth Mindset</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        How to align your behavioral responses with Microsoft's culture of growth mindset, customer
                                        obsession, and innovation.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/behavioral/microsoft-mindset"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="cs-fundamentals" className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Computer Science Fundamentals</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Operating Systems</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Core concepts in operating systems: processes, threads, scheduling, memory management, file systems,
                                        and concurrency.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/operating-systems"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Computer Networks</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Comprehensive guide to networking concepts: TCP/IP, HTTP, DNS, load balancing, and network security
                                        fundamentals.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/computer-networks"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Database Systems</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Deep dive into database concepts: relational algebra, normalization, transactions, ACID properties,
                                        and query optimization.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/database-systems"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Compilers & Programming Languages</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Understanding how programming languages work: parsing, lexical analysis, type systems, and runtime
                                        environments.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/compilers-languages"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Computer Architecture</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Fundamentals of computer architecture: CPU design, memory hierarchy, caching, pipelining, and
                                        instruction sets.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/computer-architecture"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Distributed Systems</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Core concepts in distributed computing: consistency models, consensus algorithms, fault tolerance,
                                        and distributed data processing.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/distributed-systems"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Mathematics for Computer Science</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Discrete Mathematics</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Essential discrete math concepts for computer science: logic, set theory, combinatorics, graph
                                        theory, and number theory.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/resources/cs/discrete-math" className="text-primary hover:underline text-sm font-medium">
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Probability & Statistics</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Probability theory, statistical inference, and their applications in computer science and machine
                                        learning.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/probability-statistics"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Linear Algebra</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Vectors, matrices, eigenvalues, and their applications in computer graphics, machine learning, and
                                        optimization.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/cs/linear-algebra"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="industry" className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Role-Specific Guides</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Frontend Developer</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Comprehensive preparation guide for frontend developer interviews, covering JavaScript, CSS,
                                        frameworks, performance, and accessibility.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/frontend-developer"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Backend Developer</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        In-depth guide for backend developer interviews, covering APIs, databases, system design, security,
                                        and performance optimization.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/backend-developer"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Full Stack Developer</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Preparation guide for full stack interviews, covering both frontend and backend topics, plus
                                        integration challenges and architecture.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/fullstack-developer"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>DevOps Engineer</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Comprehensive guide for DevOps interviews, covering CI/CD, infrastructure as code, containerization,
                                        monitoring, and cloud platforms.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/devops-engineer"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Scientist</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        In-depth preparation for data science interviews, covering statistics, machine learning, data
                                        manipulation, and case studies.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/data-scientist"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Product Manager</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Comprehensive guide for product management interviews, covering product strategy, metrics,
                                        prioritization, and case studies.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/product-manager"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Industry-Specific Knowledge</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>FinTech</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Key concepts and terminology for interviews in financial technology companies, including payment
                                        systems, security, and regulations.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/resources/industry/fintech" className="text-primary hover:underline text-sm font-medium">
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Healthcare Tech</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Essential knowledge for healthcare technology interviews, including HIPAA compliance, electronic
                                        health records, and healthcare workflows.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/healthcare-tech"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>E-commerce</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert">
                                    <p>
                                        Key concepts for e-commerce technology interviews, including payment processing, inventory
                                        management, and personalization.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href="/resources/industry/ecommerce"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read guide →
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            <div className="mt-12 border-t pt-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Resource Collections</h2>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <Link href="/resources/collections/system-design" className="text-lg font-medium hover:underline">
                                    System Design Collection
                                </Link>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                A curated collection of our best system design resources, from fundamentals to advanced topics.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <Link href="/resources/collections/algorithms" className="text-lg font-medium hover:underline">
                                    Algorithms & Data Structures Collection
                                </Link>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Comprehensive resources for mastering algorithms and data structures for technical interviews.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <Link href="/resources/collections/behavioral" className="text-lg font-medium hover:underline">
                                    Behavioral Interview Collection
                                </Link>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Everything you need to prepare for behavioral interviews, from STAR method to example answers.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">External Resources</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <ExternalLink className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <a
                                        href="https://leetcode.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium hover:underline"
                                    >
                                        LeetCode
                                    </a>
                                    <p className="text-sm text-muted-foreground">
                                        Platform for practicing coding problems with a large collection of interview questions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ExternalLink className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <a
                                        href="https://www.educative.io/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium hover:underline"
                                    >
                                        Educative.io
                                    </a>
                                    <p className="text-sm text-muted-foreground">
                                        Interactive courses on system design, algorithms, and programming languages.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ExternalLink className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <a
                                        href="https://github.com/donnemartin/system-design-primer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium hover:underline"
                                    >
                                        System Design Primer
                                    </a>
                                    <p className="text-sm text-muted-foreground">
                                        GitHub repository with comprehensive resources for learning system design.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ExternalLink className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <a
                                        href="https://www.pramp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium hover:underline"
                                    >
                                        Pramp
                                    </a>
                                    <p className="text-sm text-muted-foreground">
                                        Free platform for practicing technical interviews with peers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">Subscribe to our newsletter</h3>
                        <p className="text-sm text-muted-foreground">
                            Get the latest interview resources and tips delivered to your inbox
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

