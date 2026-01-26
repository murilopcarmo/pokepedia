import { useNavigate } from "@tanstack/react-router";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <p>This is the About page.</p>
      <button onClick={() => navigate({ to: "/" })}>Go Home</button>
    </div>
  );
};
