function getScore(score) {
    return score < 50 ? 'warning' : "";
}

function Scores({courseName, courseResults}) {
    return(
        <>
        <div class="scores">
          <h1>{courseName} Course</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                {courseResults.map((students) => (
                    <tr>
                        <td>{students.firstName}</td>
                        <td>{students.lastName}</td>
                        <td>{students.score}</td>
                        <td className={getScore(students.score)}>{students.score}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        </>
    );
}
export default Scores