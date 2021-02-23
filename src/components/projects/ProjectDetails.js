function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere
              reprehenderit aliquid, hic molestias qui provident! Culpa sapiente
              repellat enim, quos consequuntur blanditiis in, beatae inventore,
              magni cupiditate unde atque.
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Abdullah Adel</div>
            <div>3rd September, 2 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
