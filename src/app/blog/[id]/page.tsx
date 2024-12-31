"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

// Blog posts data
const blogPosts: Record<
  number,
  { title: string; content: string; date: string; image?: string }
> = {
  1: {
    title: "How AI is Revolutionizing Pharmacy: An Introduction",
    content:
      "Artificial intelligence is reshaping the pharmacy landscape by revolutionizing drug discovery, patient care, and operational efficiency. In drug development, AI-powered algorithms analyze immense datasets to identify potential compounds, predict success rates, and accelerate clinical trials, reducing costs and timelines dramatically. Pharmacists benefit from AI-driven systems that personalize treatments based on patient data, predict drug interactions, and automate tasks such as inventory management and prescription validation, allowing more time for patient engagement. AI also enhances patient experiences with tools like virtual assistants and chatbots, improving medication adherence and providing instant access to health information. Beyond individual care, AI addresses global challenges such as antibiotic resistance by identifying novel solutions and supports advancements in telepharmacy, extending healthcare access to remote areas. As these technologies continue to evolve, AI promises a smarter, faster, and more personalized approach to pharmacy, transforming the industry at every level.",
    date: "29 December 2024",
    image: "/ai in pharmacy.png",
  },
  2: {
    title: "AI and Medication Adherence: Can Technology Improve Compliance?",
    content:
    "Medication non-adherence remains one of the biggest challenges in healthcare, contributing to poor health outcomes, increased hospitalizations, and higher medical costs. AI is offering innovative solutions to improve medication adherence by providing smarter, more personalized tools that help patients stay on track with their treatments. AI-powered applications, smart pill bottles, and wearable devices can send reminders to patients when it’s time to take their medication, track doses in real-time, and alert healthcare providers to potential issues. Additionally, AI can analyze data from various sources, such as patient behavior and medical history, to predict and prevent non-adherence, offering proactive solutions like adjusting medication schedules or providing behavioral nudges. These AI tools not only help patients stay consistent with their treatments but also allow healthcare professionals to monitor adherence more closely, improving overall health outcomes. As the technology continues to advance, AI promises to reduce medication errors, optimize treatment plans, and create more patient-centered approaches to care, ultimately leading to better management of chronic diseases and improved quality of life for patients.",
    date: "29 December 2024",
    image: "/compliance.jpeg",
  },
  3: {
    title: "Will AI Replace Pharmacists? Understanding the Human-AI Partnership",
    content:
      "AI is transforming pharmacy, but it is not poised to replace pharmacists—rather, it will augment their role and support their work. By automating time-consuming and repetitive tasks like prescription filling, inventory management, and drug interaction checking, AI allows pharmacists to focus more on patient-centered care, consultation, and clinical decision-making. AI can process vast amounts of patient data quickly and accurately, offering insights into treatment options, predicting potential side effects, and ensuring that prescribed medications are optimal for each individual. However, the role of pharmacists remains irreplaceable when it comes to the critical elements of patient care, such as understanding a patient’s unique medical history, providing counseling on medication use, and making ethical decisions about treatment plans. Moreover, pharmacists possess the human touch—empathy, compassion, and communication skills—that AI cannot replicate. The future of healthcare is a partnership between human expertise and artificial intelligence, where AI handles repetitive tasks and provides valuable insights, enabling pharmacists to dedicate more time to high-touch patient interactions and complex clinical decisions. Together, AI and pharmacists will work in harmony to enhance patient safety, improve health outcomes, and advance the quality of care in the pharmaceutical field.",
    date: "29 December 2024",
    image: "/replace.webp",
  },
  4: {
    title: "The Role of AI in Fighting Antibiotic Resistance",
    content:
    "Antibiotic resistance is a growing global health threat that makes infections harder to treat and increases the risk of disease spread, severe illness, and death. Artificial intelligence is emerging as a powerful tool in the fight against this crisis by enabling faster, more accurate identification of resistant bacteria and the discovery of new antibiotics. AI algorithms can analyze vast amounts of genomic, clinical, and microbiological data to detect patterns of resistance, predict how bacteria will evolve, and pinpoint potential new drugs to overcome these challenges. In drug discovery, AI accelerates the process by screening large chemical libraries to identify promising compounds that may be effective against resistant strains. Furthermore, AI-powered predictive models can help healthcare providers optimize antibiotic prescribing practices, reducing overuse and misuse, which are major contributors to resistance. Machine learning also allows for real-time surveillance of resistance trends, enabling timely interventions and personalized treatment plans tailored to the specific resistance patterns in patients. By combining data-driven insights, AI can help develop novel antibiotics, refine treatment strategies, and manage the global antibiotic resistance crisis more effectively. As these technologies evolve, AI will play a central role in ensuring the continued effectiveness of antibiotics, improving patient outcomes, and reducing the spread of resistant infections worldwide.",
    date: "29 December 2024",
    image: "/resistance.jpeg",
  },
  5: {
    title: "AI in Clinical Trials: Reducing Time and Costs",
    content:
     `AI is significantly transforming the landscape of clinical trials by improving efficiency, reducing costs, and accelerating the development of new treatments. One of the key challenges in clinical trials is patient recruitment, which can be time-consuming and expensive. AI algorithms can quickly analyze large datasets, including electronic health records, to identify suitable candidates based on specific criteria, ensuring faster and more accurate recruitment. In addition, AI enhances trial design by using predictive analytics to simulate various trial scenarios, helping researchers optimize protocols and determine the most effective strategies before implementation.

AI also accelerates the data analysis phase by processing vast amounts of clinical data in real time, identifying trends, side effects, and treatment responses much faster than traditional methods. This enables researchers to make more informed decisions, adjust trials on the fly, and potentially end trials earlier if results are conclusive. Furthermore, machine learning algorithms can detect patient patterns, predict outcomes, and offer personalized insights, improving the accuracy and relevance of the findings.

By reducing the time needed for recruitment, optimizing trial design, and accelerating data analysis, AI is lowering the costs associated with clinical trials, making drug development more cost-effective. This not only shortens the path to market for new drugs but also ensures that life-saving treatments reach patients faster, improving overall healthcare outcomes.`,
    date: "29 December 2024",
    image: "/clinical.jpg",
  },
  6: {
    title: "How AI Can Help You Find the Right Medication Faster",
    content:
      "AI is transforming how healthcare professionals select the right medications by personalizing treatment plans based on a deep analysis of patient data. By considering factors such as medical history, genetic profiles, allergies, and lifestyle choices, AI can recommend medications that are more likely to work effectively and safely for each individual. This reduces the reliance on trial-and-error approaches that can often delay effective treatment and lead to adverse effects. AI systems utilize vast, up-to-date drug databases and clinical research to cross-check for possible drug interactions, contraindications, and side effects, providing a higher level of accuracy and safety in prescribing. In addition, AI can help doctors and pharmacists track a patient's response to treatment over time, offering real-time insights that allow for quick adjustments to medication regimens if necessary. By identifying the most effective drug options faster and reducing the risks of adverse reactions, AI is not only improving the speed of treatment but also increasing patient satisfaction, promoting better health outcomes, and enhancing the overall quality of care. With AI working alongside healthcare professionals, patients can receive more tailored and timely treatments, reducing the burden of unnecessary prescriptions and ensuring a more efficient, personalized approach to healthcare.",
    date: "29 December 2024",
    image: "/bottle-pills.avif",
  },
};

const BlogPost = () => {
  const params = useParams();
  const id = params?.id;

  const post = blogPosts[Number(id) as keyof typeof blogPosts];

  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [newName, setNewName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  const addComment = () => {
    if (newName.trim() && newComment.trim()) {
      setComments([...comments, { name: newName, comment: newComment }]);
      setNewName("");
      setNewComment("");
    }
  };

  // If post is not found
  if (!post) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto text-center bg-slate-100">
      {/* Blog Post Content */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto font-sans mt-6">
        <div className="p-6">
          <h3 className="text-gray-900 text-2xl font-bold mb-4 hover:text-orange-400 hover:underline transition-colors duration-200">
            {post.title}
          </h3>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={500}
              className="w-full h-auto mb-4 rounded-md"
            />
          )}
          <p className="text-sm text-gray-800 leading-relaxed mb-4">
            {post.content}
          </p>
          <p className="text-sm text-orange-500 font-semibold">
            Published on: {post.date}
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto p-6 mt-8 max-w-3xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 italic">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded shadow-sm text-left"
              >
                <p className="font-bold text-gray-700">{comment.name}:</p>
                <p className="text-gray-600">{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Add Comment Form */}
        <div className="mt-6">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Your name..."
            className="border border-gray-300 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="border border-gray-300 p-2 rounded w-full mb-3 h-20 focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            onClick={addComment}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;