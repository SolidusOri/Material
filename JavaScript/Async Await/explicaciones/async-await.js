//asyns - await

async function requestHandler(req, res) {
    try {
        const userBD = await User.findById(req.userId);
        const TasksBD = await Task.findById(userBD.taskId);
        TasksBD.completed = true;
        await TasksBD.save();
        res.send('Tasks Completed');
    } catch (error) {
        res.send(error);
    }
}