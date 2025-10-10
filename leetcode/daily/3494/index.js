/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
const minTime = (skill, mana) => {
  const n = skill.length;
  const dp = new Array(n).fill(0);

  // Duyệt qua từng mana[j]
  for (const m of mana) {
    // Wizard đầu tiên chỉ cộng thêm m * skill[0]
    dp[0] += m * skill[0];

    // Wizard tiếp theo: dp[i] = max(dp[i], dp[i-1]) + skill[i] * m
    for (let i = 1; i < n; i++) {
      dp[i] = Math.max(dp[i], dp[i - 1]) + m * skill[i];
    }

    // Cập nhật “phase” lệch bằng cách trừ đi thời gian wizard i vừa dùng
    // để chuẩn bị cho potion kế tiếp
    for (let i = n - 1; i > 0; i--) {
      dp[i - 1] = dp[i] - m * skill[i];
    }
  }

  return dp[n - 1];
};
