import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"
function Results({ results }) {
  // console.log(results);
  return (
    <FlipMove>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
        3xl:flex flex-wrap justify-center ">
        {results.map((result) => (
          //  console.log(results);
          <Thumbnail

            key={result.id}
            result={result}
          />
        ))}
      </div>
    </FlipMove>
  )
}

export default Results;
