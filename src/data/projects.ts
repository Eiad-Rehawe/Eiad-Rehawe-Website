/**
 * Selected Work — project showcase data.
 * To add a new project, append an object to this array — no component
 * changes required.
 */

export interface CaseStudy {
  challenge: string;
  solution: string;
  architecture: string[];
  technology: string[];
  result: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  github?: string;
  live?: string;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "smart-virtual-university",
    name: "Smart Virtual University",
    category: "Educational Platform",
    summary:
      "An intelligent educational platform combining learning management, course enrollment, live sessions, and automated assessment at institutional scale.",
    tags: ["Laravel", "MySQL", "REST APIs", "Redis"],
    github: "",
    live: "",
    caseStudy: {
      challenge:
        "Traditional university workflows — enrollment, scheduling, grading — were fragmented across manual processes and disconnected tools, making them slow to operate and hard to scale.",
      solution:
        "Designed a unified platform with role-based access for students, instructors, and admins, built around a course/enrollment engine and a REST API layer to support future mobile and integration needs.",
      architecture: ["Frontend", "API Gateway", "Application Services", "Database", "External Services"],
      technology: ["Laravel", "PHP", "MySQL", "REST APIs", "Redis"],
      result:
        "A system architecture capable of handling concurrent enrollment spikes and multi-role permissions without compromising data integrity.",
    },
  },
  {
    id: "ecommerce-platform",
    name: "E-Commerce Platform",
    category: "Business System",
    summary:
      "A scalable e-commerce backend with catalog management, cart/checkout flow, order processing, and a payment-ready architecture.",
    tags: ["Laravel", "PostgreSQL", "Redis", "Docker"],
    github: "",
    live: "",
    caseStudy: {
      challenge:
        "A growing product catalog and concurrent checkouts required an architecture that stays consistent under load and remains easy to extend with new sales channels.",
      solution:
        "Built a modular backend separating catalog, cart, and order domains, with Redis-backed caching for high-read endpoints and a queue-driven order pipeline.",
      architecture: ["Frontend", "API", "Services", "Database", "External Services"],
      technology: ["Laravel", "PHP", "PostgreSQL", "Redis", "Docker"],
      result: "Reduced catalog response times through caching and an order pipeline resilient to partial failures.",
    },
  },
  {
    id: "event-qr-system",
    name: "Event Management & QR System",
    category: "Business System",
    summary:
      "An event management system with attendee registration, dynamic QR-code generation, and real-time check-in validation.",
    tags: ["Laravel", "MySQL", "REST APIs"],
    github: "",
    live: "",
    caseStudy: {
      challenge: "Manual check-in at events was slow, error-prone, and impossible to audit in real time.",
      solution:
        "Implemented unique per-attendee QR codes with a validation API that scanners hit at the gate, giving organizers a live view of attendance.",
      architecture: ["Frontend", "API", "Validation Service", "Database"],
      technology: ["Laravel", "PHP", "MySQL", "REST APIs"],
      result: "Cut manual check-in time significantly while giving organizers real-time attendance data.",
    },
  },
  {
    id: "ai-powered-system",
    name: "AI-Powered System",
    category: "AI-Powered Product",
    summary:
      "A backend service integrating AI APIs into an existing product workflow to automate content processing and decision support.",
    tags: ["AI", "FastAPI", "Python", "PostgreSQL"],
    github: "",
    live: "",
    caseStudy: {
      challenge:
        "A manual, repetitive workflow was consuming significant staff time and introducing inconsistent output quality.",
      solution:
        "Designed a FastAPI service that orchestrates calls to AI APIs, validates and post-processes responses, and persists results for downstream use.",
      architecture: ["Frontend", "API", "AI Orchestration Layer", "Database", "External AI Services"],
      technology: ["Python", "FastAPI", "AI APIs", "PostgreSQL"],
      result: "Automated a previously manual workflow with a service designed for predictable latency and graceful degradation.",
    },
  },
  {
    id: "delivery-management-system",
    name: "Delivery Management System",
    category: "Operations & Logistics",
    summary: "An operational system for managing delivery orders, driver assignment, and real-time status tracking.",
    tags: ["Laravel", "MySQL", "Redis", "REST APIs"],
    github: "",
    live: "",
    caseStudy: {
      challenge:
        "Coordinating drivers, orders, and delivery statuses manually led to delays and poor visibility for both operators and customers.",
      solution:
        "Built an order-assignment engine with status tracking and a REST API layer to support a future driver-facing mobile app.",
      architecture: ["Frontend", "API", "Assignment Engine", "Database", "External Services"],
      technology: ["Laravel", "PHP", "MySQL", "REST APIs", "Redis"],
      result: "A clear operational pipeline from order creation to delivery confirmation with full status visibility.",
    },
  },
  {
    id: "educational-platform",
    name: "Educational Platform",
    category: "Educational Platform",
    summary: "A learning platform for structured courses, progress tracking, and instructor-managed content delivery.",
    tags: ["Laravel", "MySQL", "REST APIs"],
    github: "",
    live: "",
    caseStudy: {
      challenge:
        "Instructors needed a straightforward way to publish structured course content and track learner progress without heavy tooling overhead.",
      solution:
        "Built a course/lesson data model with progress tracking and role-based publishing, exposed through a clean REST API.",
      architecture: ["Frontend", "API", "Services", "Database"],
      technology: ["Laravel", "PHP", "MySQL", "REST APIs"],
      result: "A maintainable content model that instructors could extend without engineering involvement.",
    },
  },
];
