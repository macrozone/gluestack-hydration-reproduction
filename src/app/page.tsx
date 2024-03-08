import { Heading } from "@gluestack-ui/themed";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>reproduction</h1>
      <p>make sure to reload the page to see the error</p>
      <ul>
        <li>
          <Link href="/broken">
            Center before Heading {"-->"} Hydration error (reload the page)
          </Link>
        </li>
        <li>
          <Link href="/not-broken">
            Heading before Center {"-->"} No hydration error
          </Link>
        </li>
        <li>
          <Link href="/empty-heading">
            empty heading as workaround {"-->"} No hydration error
          </Link>
        </li>
      </ul>
    </main>
  );
}
