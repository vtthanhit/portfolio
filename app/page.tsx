import HomeAvatar from "./components/home/home-avatar";
import Info from "./components/home/info";
import Nav from "./components/nav";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="flex-col md:flex-row flex items-center justify-center">
          <HomeAvatar />
          <Info />
        </div>
      </main>
    </>
  )
}
