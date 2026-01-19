/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const m = mat.length;
    const n = mat[0].length;

    const prefix = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(0)
    );

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            prefix[i][j] =
                mat[i - 1][j - 1] +
                prefix[i - 1][j] +
                prefix[i][j - 1] -
                prefix[i - 1][j - 1];
        }
    }

    const canFormSquare = (k) => {
        for (let i = k; i <= m; i++) {
            for (let j = k; j <= n; j++) {
                const sum =
                    prefix[i][j] -
                    prefix[i - k][j] -
                    prefix[i][j - k] +
                    prefix[i - k][j - k];

                if (sum <= threshold) return true;
            }
        }
        return false;
    };

    let left = 0;
    let right = Math.min(m, n);
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canFormSquare(mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
};