import Navigation from "@/components/Navigation";
import { useRoute } from "wouter";
import { blogPosts } from "@/lib/blog";

export default function BlogPost() {
  const [, params] = useRoute<{ slug: string }>("/blog/:slug");
  const post = params?.slug ? blogPosts[params.slug] : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-3xl mx-auto">
          {!post ? (
            <div className="glass thin-border rounded-xl p-6">
              <h1 className="text-2xl font-serif font-semibold">Article not found</h1>
              <p className="text-muted-foreground mt-2">The requested post could not be located.</p>
            </div>
          ) : (
            <article className="glass thin-border rounded-xl p-6 lgold-glow">
              {post.image && (
    <img
      src={post.image}
      alt={post.title}
      className="rounded-lg w-full mb-6"
    />
  )}
              <h1 className="text-3xl font-serif font-semibold">{post.title}</h1>
              <p className="text-muted-foreground mt-2">{post.description}</p>
              <div className="prose prose-invert mt-6 whitespace-pre-line">
                {post.body}
              </div>
            </article>
          )}
        </section>
      </main>
    </div>
  );
}


