
function startTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

function processTask(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task B processed: ${input}`);
    }, 1500);
  });
}

function finalizeTask(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Final result: ${input}`);
    }, 500);
  });
}

startTask()
  .then((resultA) => {
    console.log(resultA);
    return processTask(resultA);
  })
  .then((resultB) => {
    console.log(resultB);
    return finalizeTask(resultB);
  })
  .then((resultC) => {
    console.log(resultC);
  })
  .catch((error) => {
    console.error("Error in task workflow:", error);
  });
