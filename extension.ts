/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace hourOfCode {
    /**
     * True if the agent is not standing on top of the goal (Gold Block)
     */
    //% blockId=goal_not_reached block="goal not reached"
    //% weight=40
    export function goalNotReached() {
        return (!(agent.inspect(AgentInspection.Block, SixDirection.Down) == Block.GoldBlock))
    }
    /**
     * True if the agent detects a dead bush block in a direction
     * @param dir direction to inspect
     */
    //% blockId=agent_detect_dead_bush block="agent detect dead bush %direction"
    //% weight=30
    export function agentDetectDeadBush(dir: SixDirection) {
        return (agent.inspect(AgentInspection.Block, dir) == Block.DeadBush)
    }
    /**
     * True if the agent detects any double_plant (double tallgrass, large fern, sunflower, lilac, peony, rosebush) in a direction
     * @param dir direction to inspect
     */
    //% blockId=agent_detect_dry_grass block="agent detect dry grass %direction"
    //% weight=20
    export function agentDetectDryGrass(dir: SixDirection) {
        return (agent.inspect(AgentInspection.Block, dir) == blocks.blockByName("double_plant"))
    }
    /**
     * True if the agent detects any dead bush or double_plant in a direction
     * @param dir direction to inspect
     */
    //% blockId=agent_detect_fire_hazard block="agent detect fire hazard %direction"
    //% weight=10
    export function agentDetectFireHazard(dir: SixDirection) {
        return hourOfCode.agentDetectDeadBush(dir) || hourOfCode.agentDetectDryGrass(dir)
    }
} 
