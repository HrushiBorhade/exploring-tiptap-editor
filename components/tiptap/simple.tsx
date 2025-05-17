'use client'
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Strike from "@tiptap/extension-strike"
import { Button } from "../ui/button"
const SimpleEditor = () => {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
            },
        },
        extensions: [StarterKit, Strike],
        content: CONTENT,
        autofocus: true,
        editable: true,
        injectCSS: false,
    })
    if (!editor) {
        return null
    }


    return (
        <div className="  overflow-hidden  border border-dashed rounded-lg relative">

            <div className="w-full h-[70dvh] p-4 overflow-auto flex flex-col gap-2">
                <div className="w-full flex items-center gap-1">
                    <button onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'bg-amber-400 p-2 rounded-lg' : ''}
                    >
                        S
                    </button>
                </div>
                <EditorContent className={`font-mono ${editor.isActive("highlight") && "bg-amber-400"}`} editor={editor} />
            </div>
            <div className="absolute w-full bottom-0  h-20 bg-gradient-to-t from-background to-transparent" />
        </div>
    )
}

export default SimpleEditor
const CONTENT =
    `AI Agents: An Overview
Introduction
AI agents are autonomous or semi-autonomous software systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional software that follows predefined paths, AI agents can adapt their behavior based on their experiences and changing circumstances. The concept brings together multiple disciplines including artificial intelligence, machine learning, cognitive science, and systems engineering.

Core Components of AI Agents
1. Perception
Sensors/Inputs: Ways for the agent to receive information from its environment
Processing: Methods to interpret raw input data into meaningful information
State representation: Internal models of the world and current situation
2. Decision Making
Goals: Objectives that guide the agent's behavior
Planning: Creating sequences of actions to achieve goals
Reasoning: Logic-based processes to evaluate options and situations
Learning: Adapting behaviors based on experience
3. Action
Effectors/Outputs: Ways for the agent to influence its environment
Action selection: Choosing from available options
Execution: Implementing selected actions
Types of AI Agents
Reactive Agents
Simple agents that operate purely on stimulus-response mechanisms without maintaining internal state. They map directly from current inputs to outputs without considering history.

Example: A thermostat that turns heating on when temperature drops below a threshold.

State-Based Agents
Agents that maintain an internal representation of their environment, allowing them to make decisions based on both current percepts and their stored state.

Example: A chess-playing AI that maintains a representation of the board state.

Goal-Based Agents
Agents that make decisions based on how actions will help achieve specific goals. These agents evaluate possible futures.

Example: A pathfinding agent that plots a route to reach a destination.

Utility-Based Agents
Agents that optimize for a utility function that quantifies the desirability of different states or outcomes.

Example: A recommendation system maximizing user engagement or satisfaction.

Learning Agents
Agents that can improve their performance over time through experience.

Example: A reinforcement learning system that plays games and improves its strategy through multiple iterations.

Multi-Agent Systems
Complex systems where multiple agents interact with each other, often with different capabilities, responsibilities, or even competing goals.

Characteristics:
Coordination: Methods for agents to work together
Negotiation: Protocols for resolving conflicts or allocating resources
Communication: Information exchange between agents
Emergence: Complex behaviors that arise from simple agent interactions
Modern AI Agent Architectures
LLM-Based Agents
Leveraging large language models as the core reasoning engine for agents, with various tools and capabilities integrated.

Example: An AI assistant that can reason about queries, use tools, and take actions on behalf of users.

Agentic Workflows
Systems of specialized agents working together in orchestrated processes.

Example: A system where one agent handles customer inquiries, another researches solutions, and a third formulates and delivers responses.

Autonomous Systems
Fully independent agents that operate without continuous human oversight.

Example: Self-driving vehicles, autonomous drones, or robotics systems.

Applications of AI Agents
Personal Assistants
Task management and scheduling
Information retrieval and summarization
Communication management
Business Process Automation
Customer service agents
Data processing and analysis
Decision support systems
Creative Domains
Co-creative assistants for writing, design, and coding
Generative systems for content creation
Ideation and brainstorming partners
Research and Discovery
Scientific hypothesis generation and testing
Literature review and knowledge synthesis
Experimental design optimization
Physical World Interaction
Robotics control systems
Smart home and IoT management
Manufacturing and industrial automation
Ethical and Safety Considerations
Alignment
Ensuring agents act in accordance with human values and intentions.

Transparency
Making agent decision-making processes understandable and explainable.

Agency and Control
Balancing autonomous operation with appropriate human oversight.

Social Impact
Understanding and mitigating effects on labor markets, social systems, and human relationships.

Security
Protecting against misuse, manipulation, or adversarial attacks on agent systems.

Future Directions
Increased Autonomy
More capable agents that require less human supervision and can handle increasingly complex tasks.

Enhanced Collaboration
Better human-agent and agent-agent collaboration models.

Embodied Intelligence
Integration of agent systems with physical capabilities through robotics.

Collective Intelligence
Networks of specialized agents working together to solve complex problems.

General Agency
Progress toward agents with broader, more flexible capabilities across domains.

Conclusion
AI agents represent one of the most promising and potentially transformative applications of artificial intelligence. As these systems continue to evolve and become more capable, they are likely to play increasingly important roles across virtually all domains of human activity. The challenges of designing safe, effective, and beneficial agent systems will be central to the field of AI in the coming years.

`