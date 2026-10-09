<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public landing page at `/`, with focused presentation components and no backend authentication or billing until requested; the current deliverable is a marketing page only.
- Define visual styling and semantic tokens centrally in `src/styles.css`; keep feature JSX token-adherent.
- Treat displayed currency conversions as illustrative estimates rather than live exchange rates until a rate source is connected.
