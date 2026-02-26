function getScore(score) {
    return score < 50 ? 'warning' : "";
}

function Scores({courseName, courseResults}) {
    const total = courseResults.reduce((sum, student) => {
        return sum + student.score;
    }, 0);

    const average = total/courseResults.length;
    const min = Math.min(...courseResults.map(student => student.score));
    const max = Math.max(...courseResults.map(student => student.score));

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
                <tr>
                    <th>AVERAGE:</th>
                    <th>{average.toFixed(2)}</th>
                    <th>POINT</th>
                </tr>
                <tr>
                    <th>MINIMUN:</th>
                    <th>{min}</th>
                    <th>POINT</th>
                </tr>
                <tr>
                    <th>MAXIMUN:</th>
                    <th>{max}</th>
                    <th>POINT</th>
                </tr>
            </tbody>
          </table>
        </div>
        </>
    );
}
export default Scores