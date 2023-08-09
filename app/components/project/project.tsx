import Image from "next/image";
import projectList from "./projectList";

const ProjectWrap = () => {
  return (
    <div className="flex flex-wrap gap-7">
      {
        projectList.map((projectItem) => (
          <>
            <div className="transform-none">
              <div className="p-5 rounded-2xl sm:w-[360px] w-full bg-opacity-20 bg-black backdrop-blur-lg shadow-md">
                <div className="relative w-full h-[230px]">
                  <Image
                    src={projectItem.image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-white font-bold text-2xl">{projectItem.name}</h3>
                  <p className="mt-2 text-sm line-clamp-4 text-slate-300">{projectItem.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {projectItem.languages.map((language, index) => (
                    <p key={index} className="text-sm text-primary">#{language}</p>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))
      }
    </div>
  )
}

export default ProjectWrap;
