/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace hourOfCode {
    /**
     * Checks if the goal is reached by looking for the Gold Block direction down to agent
     */
    //% blockId=goal_not_reached block="goal not reached"
    //% weight=30
    export function goalNotReached() {
        return (!(agent.inspect(AgentInspection.Block, SixDirection.Down) == Block.GoldBlock))
    }
    /**
     * Checks if the agent detects fire in a direction
     * @param dir direction to inspect 
     */
    //% blockId=agent_detect_fire block="agent detect fire %direction"
    //% weight=20
    export function agentDetectFire(direction: SixDirection) {
        return (agent.inspect(AgentInspection.Block, direction) == Block.Fire)
    }
    /**
     * Checks if the agent detects fire in a direction
     * @param dir direction to inspect 
     */
    //% blockId=agent_detect_dead_bush block="agent detect dead bush %direction"
    //% weight=10
    export function agentDetectDeadBush(direction: SixDirection) {
        return (agent.inspect(AgentInspection.Block, direction) == Block.DeadBush)
    }
}
