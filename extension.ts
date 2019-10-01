/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#ffab19 icon="\uf287"
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
    //% blockId=agent_detect_fire block="agent detect fire $dir"
    //% weight=20
    export function agentDetectFire(dir: SixDirection) {
        return (agent.inspect(AgentInspection.Block, dir) == Block.Fire)
    }
    /**
     * Checks if the agent detects fire in a direction
     * @param dir direction to inspect 
     */
    //% blockId=agent_detect_dead_bush block="agent detect dead bush $dir"
    //% weight=10
    export function agentDetectDeadBush(dir: SixDirection) {
        return (agent.inspect(AgentInspection.Block, dir) == Block.DeadBush)
    }
}
