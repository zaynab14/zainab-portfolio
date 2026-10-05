import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[#05070a] text-foreground">
            <div className="max-w-md text-center">
                <p className="font-mono text-cyan-400 mb-3">404</p>
                <h1 className="text-3xl font-bold mb-3">Page not found</h1>
                <p className="text-muted-foreground mb-6">The page you requested does not exist.</p>
                <Link className="text-cyan-400 hover:text-cyan-300" to="/">Return to portfolio</Link>
            </div>
        </main>
    );
}
