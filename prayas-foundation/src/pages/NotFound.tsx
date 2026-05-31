import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';

export default function NotFound() {
  return (
    <PageWrapper title="404 — Page Not Found | Prayas Foundation">
      <section className="min-h-[70vh] flex items-center justify-center bg-[#faf9f9]" aria-label="Page not found">
        <div className="text-center px-5">
          <div className="text-8xl font-black text-[#e3e2e2] mb-4">404</div>
          <h1 className="text-2xl font-bold text-[#00132c] mb-3">Page Not Found</h1>
          <p className="text-[#43474e] mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#00132c] text-white px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#002850] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Back to Home
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
